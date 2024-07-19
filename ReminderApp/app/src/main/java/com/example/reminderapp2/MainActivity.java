package com.example.reminderapp2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;


import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {


    private ListView remindListView;
    Button AddReminder,Refresh;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initWidget();
        loadFromDBToMemory();
        setReminderAdapter();
        setOnClickListener();


        AddReminder.setOnClickListener(view -> {
            newReminder(view);
        });

        Refresh.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setReminderAdapter();
            }
        });

    }

    private void setOnClickListener() {

        remindListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Reminder selectedReminder = (Reminder) remindListView.getItemAtPosition(position);
                Intent editReminderIntent = new Intent(getApplicationContext(), ViewReminderActivity.class);
                editReminderIntent.putExtra(Reminder.REMINDER_EDIT_EXTRA,selectedReminder.getId());
                startActivity(editReminderIntent);
            }
        });

    }


    private void initWidget() {
        remindListView = findViewById(R.id.reminderListView);
        AddReminder = findViewById(R.id.saveReminderBtn);
        Refresh = findViewById(R.id.refreshBtn);
    }

    private void loadFromDBToMemory() {
        SQLiteManager sqLiteManager = SQLiteManager.instanceOfDatabase(this);
        sqLiteManager.populateReminderListArray();
    }

    private void setReminderAdapter() {
        ReminderAdapter reminderAdapter = new ReminderAdapter(getApplicationContext(),Reminder.nonDeletedReminder());
        remindListView.setAdapter(reminderAdapter);
    }

    public void newReminder(View view){
        Intent newReminderIntent = new Intent(this, ViewReminderActivity.class);
        startActivity(newReminderIntent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        setReminderAdapter();


    }



}