package com.nd.capstone.webinar

import android.annotation.SuppressLint
import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.nd.capstone.databinding.ItemListBinding
import com.nd.capstone.detail.DetailWebinarActivity

//class ListWebinarAdapter : RecyclerView.Adapter<ListWebinarAdapter.ListViewHolder>() {
//    private val listStory = ArrayList<ListWebinarItem>()
//    override fun onCreateViewHolder(viewGroup: ViewGroup, i: Int): ListViewHolder {
//        val binding =
//            ItemListBinding.inflate(LayoutInflater.from(viewGroup.context), viewGroup, false)
//        return ListViewHolder(binding)
//    }
//
//    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
//        Glide.with(holder.itemView.context)
//            .load(listStory[position].photoUrl)
//            .into(holder.binding.imgAvatar)
//        holder.binding.tvName.text = listStory[position].name
//        holder.itemView.setOnClickListener {
//            val sendIntent =
//                Intent(holder.binding.tvName.context, DetailWebinarActivity::class.java)
//            sendIntent.putExtra(DetailWebinarActivity.NAME_DETAIL, listStory[position].name)
//            sendIntent.putExtra(DetailWebinarActivity.URL_DETAIL, listStory[position].photoUrl)
//            sendIntent.putExtra(DetailWebinarActivity.DESC_DETAIL, listStory[position].description)
//            holder.binding.tvName.context.startActivity(sendIntent)
//        }
//    }
//
//    override fun getItemCount(): Int = listStory.size
//    class ListViewHolder(var binding: ItemListBinding) : RecyclerView.ViewHolder(binding.root)
//
//    @SuppressLint("NotifyDataSetChanged")
//    fun addStory(list: List<ListWebinarItem>) {
//        listStory.clear()
//        listStory.addAll(list)
//        notifyDataSetChanged()
//    }
//}