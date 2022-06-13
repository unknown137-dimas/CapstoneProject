package com.nd.capstone.signup

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.nd.capstone.ApiConfig
import com.nd.capstone.model.UserPreference
import com.nd.capstone.response.SignupResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class SignupViewModel(private val pref: UserPreference) : ViewModel() {
    private val _isSignup = MutableLiveData<Boolean>()
    val isSignup: LiveData<Boolean> = _isSignup


    fun SignupUser(name: String, email: String, password: String) {
        val client = ApiConfig.getApiService().userSignup(name, email, password)
        client.enqueue(object: Callback<SignupResponse> {
            override fun onResponse(call: Call<SignupResponse>, response: Response<SignupResponse>) {
                if (response.isSuccessful){
                    _isSignup.value = true
                    Log.d(TAG, "Success")
                } else {
                    _isSignup.value = false
                    Log.e(TAG, "onFailure: ${response.message()}")
                }
            }
            override fun onFailure(call: Call<SignupResponse>, t: Throwable) {
                _isSignup.value = false
                Log.e(TAG, "onFailure: ${t.message.toString()}")
            }
        }
        )
    }

    companion object {
        private const val TAG = "SignupViewModel"
    }
}