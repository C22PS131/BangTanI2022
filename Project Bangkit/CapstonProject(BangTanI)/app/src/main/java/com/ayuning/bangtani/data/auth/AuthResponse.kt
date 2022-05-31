package com.ayuning.bangtani.data.auth

import com.ayuning.bangtani.data.model.User
import com.google.gson.annotations.SerializedName

data class AuthResponse(
    @SerializedName("error")
    val error: Boolean,
    @SerializedName("message")
    val message: String,
    @SerializedName("loginResult")
    val loginResult: User
)
