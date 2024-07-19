package com.example.reminderapp2;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class ReminderAdapter extends ArrayAdapter<Reminder> {
    public ReminderAdapter(Context context, List<Reminder> reminds){
        super(context,0,reminds);
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        Reminder reminder = getItem(position);
        if(convertView==null){
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.reminder_cell,parent, false);
        }

        TextView date = convertView.findViewById(R.id.cellDate);
        TextView desc = convertView.findViewById(R.id.cellDesc);
        TextView time = convertView.findViewById(R.id.cellTime);

        date.setText(String.format("%02d",reminder.getDate_day())+"/"+String.format("%02d",reminder.getDate_month())+"/"+reminder.getDate_year());
        desc.setText(reminder.getDescription());
        time.setText(String.format("%02d",reminder.getTime_hour())+":"+String.format("%02d",reminder.getTime_min())+" "+reminder.getTime_am_pm());



        return convertView;
    }
}
