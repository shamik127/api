<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;

class AuthenticationController extends Controller
{
    public function getSocialRedirect( $account )
    {
        try {
            return Socialite::with($account)->redirect();
        }
        catch(InvalidArgumentException $e) {
            return redirect('/login');
        }
    }

    public function getSocialCallback( $account )
    {
        $socialUser = Socialite::with( $account )->user();
        $user = User::where('provider_id', '=', $socialUser->id)->where($account, '=', 'provider')->first();

        if (!$user) {
            $newUser = new User();
            $newUser->provider_id = $socialUser->getId();
            $newUser->provider = $account;
            $newUser->password = '';
            $newUser->avatar = $socialUser->getAvatar();
            $newUser->name = $socialUser->getName();
            $newUser->email = $socialUser->getEmail() == '' ? '' : $socialUser->getEmail();
            $newUser->save();
            $user = $newUser;
        }
        
        Auth::login($user);
        return redirect('/');
    }
}
