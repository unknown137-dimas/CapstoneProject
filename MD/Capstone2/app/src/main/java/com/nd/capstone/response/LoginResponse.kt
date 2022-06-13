package com.nd.capstone.response

import com.google.gson.annotations.SerializedName

data class LoginResponse(
    @field:SerializedName("loginResult")
    val loginResult: LoginResult,
    @field:SerializedName("error")
    val error: Boolean,
    @field:SerializedName("message")
    val message: String
)
data class LoginResult(
    @field:SerializedName("user")
    val user: String,

    @field:SerializedName("name")
    val name: String,

    @field:SerializedName("token")
    val token: String,

    @field:SerializedName("isLogin")
    val isLogin: Boolean
)
