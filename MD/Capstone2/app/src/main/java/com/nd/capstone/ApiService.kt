package com.nd.capstone


import com.nd.capstone.response.LoginResponse
import com.nd.capstone.response.SignupResponse
import retrofit2.Call
import retrofit2.http.*


interface ApiService {
    @FormUrlEncoded
    @POST("api/user/register")
    fun userSignup(
        @Field("name") name:String,
        @Field("email") email:String,
        @Field("password") password:String
    ): Call<SignupResponse>

    @FormUrlEncoded
    @POST("api/user/login")
    fun userLogin(
        @Field("email") email:String,
        @Field("password") password: String
    ): Call<LoginResponse>

}