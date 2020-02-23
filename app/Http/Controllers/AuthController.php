<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    { 
        $user = User::where('email', $request->email)->first();
        $credentials = request()->validate([
           'email' => 'required|email',
           'password' => 'required|string',
       ]);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'errors' => [
                    'email' => [__('auth.failed')]
                ]
            ], 401);
        }
        return $this->respondWithToken($token, $user->id);
    }

    protected function respondWithToken($token, $id)
    {
        return response()->json(
            [
                'status'        => 'success',
                'access_token' => $token, 
                'user_id' => $id, 
                'token_type'    => 'bearer',
                'expires_in'    => auth()->factory()->getTTL() * 60,
            ]
        );
    }

    public function register(Request $request)
    {

        $user           = new User;
        $user->email    = $request->email;
        $user->name     = $request->name;
        $user->password = bcrypt($request->password);
        $user->save();

        return response(
            [
                'status' => 'success',
                'data'   => $user,
            ],
            200
        );
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return new UserResource(auth()->user());
    }
}
