package com.nd.capstone

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.nd.capstone.databinding.ActivityMain2Binding
import com.nd.capstone.mentor.MentorActivity
import com.nd.capstone.webinar.WebinarActivity

class MainActivity2 : AppCompatActivity() {

    private lateinit var binding: ActivityMain2Binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMain2Binding.inflate(layoutInflater)
        setContentView(binding.root)

        menuListener()
    }

    private fun menuListener(){
        binding.cvForm.setOnClickListener {
            startActivity(Intent(this, FormActivity::class.java))
            finish()
        }
        binding.ivMentor.setOnClickListener {
            startActivity(Intent(this, MentorActivity::class.java))
            finish()
        }
        binding.ivMentor.setOnClickListener {
            startActivity(Intent(this, WebinarActivity::class.java))
            finish()
        }
    }
}