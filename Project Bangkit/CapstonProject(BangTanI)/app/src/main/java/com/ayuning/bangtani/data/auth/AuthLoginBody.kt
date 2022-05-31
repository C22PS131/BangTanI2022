package com.ayuning.bangtani.data.auth

import com.google.gson.annotations.SerializedName

data class AuthLoginBody(
    @SerializedName("email")
    val email: String,
    @SerializedName("password")
    val password: String
)
