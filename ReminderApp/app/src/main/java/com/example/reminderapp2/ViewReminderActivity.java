package com.example.reminderapp2;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;


public class ViewReminderActivity extends AppCompatActivity {

    private EditText descEditText;

    private Reminder selectedReminder;

    TextView selectDate, selectTime;
    private Button saveBtn, deleteBtn ;

    int day,month,year,hour,min;
    String am_pm;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_reminder);
        initWidgets();
        checkForEditReminder();
        updateVariableValues();

        selectDate.setOnClickListener(view -> {
            openDialogueDate();
        });

        selectTime.setOnClickListener(view -> openDialogueTime());

        saveBtn.setOnClickListener(v -> {
            if(selectDate.getText().toString().equals("Select Date") || selectTime.getText().toString().equals("Select Time"))
            {
                Toast.makeText(getApplicationContext(), "Please Enter the Date and Time", Toast.LENGTH_SHORT).show();
            }
            else
            {
                saveReminder(v);
            }
        });


    }

    private void updateVariableValues() {
        if(selectedReminder != null){
            day = selectedReminder.getDate_day();
            month = selectedReminder.getDate_month();
            year = selectedReminder.getDate_year();
            hour = selectedReminder.getTime_hour();
            min = selectedReminder.getTime_min();
            am_pm = selectedReminder.getTime_am_pm();
        }
    }

    private void checkForEditReminder() {
        Intent previousIntent = getIntent();

        int passedReminderID = previousIntent.getIntExtra(Reminder.REMINDER_EDIT_EXTRA,-1);
        selectedReminder = Reminder.getReminderForID(passedReminderID);

        if(selectedReminder !=null){
            selectDate.setText(String.format("%02d",selectedReminder.getDate_day())+"/"+String.format("%02d",selectedReminder.getDate_month())+"/"+selectedReminder.getDate_year());
            selectTime.setText(String.format("%02d",selectedReminder.getTime_hour())+" : "+ String.format("%02d", selectedReminder.getTime_min())+ " "+selectedReminder.getTime_am_pm());
            descEditText.setText(selectedReminder.getDescription());
        }
        else{
            deleteBtn.setVisibility(View.INVISIBLE);
        }
    }

    private void initWidgets() {
        descEditText= findViewById(R.id.descriptionEditText);
        selectDate = findViewById(R.id.selectDateTextView);
        selectTime = findViewById(R.id.selectTimeTextView);
        saveBtn = findViewById(R.id.saveReminderBtn);
        deleteBtn = findViewById(R.id.DeleteBtn);
    }

    private void openDialogueDate(){
        DatePickerDialog dialog = new DatePickerDialog(this, (datePicker, selectYear, selectMonth, selectDay) -> {
            selectMonth++;

            //add the date code here

            day= selectDay;
            month = selectMonth;
            year = selectYear;

            selectDate.setText(String.format("%02d",day)+ "/" +String.format("%02d",month)+ "/" +year);
        }, 2022, 0, 12);
        dialog.show();

    }

    private void openDialogueTime(){
        TimePickerDialog dialog = new TimePickerDialog(this, (timePicker, selectHour, selectMinute) -> {

            am_pm = (selectHour < 12) ? "AM" : "PM";
            if(am_pm.equals("PM") )
                selectHour-= 12;
            if(selectHour == 0)
                selectHour=12;

            //add the time code here

            hour= selectHour;
            min= selectMinute;

//                timeText.setText("%02d"+hour+" : %02d"+ min + " "+ am_pm);
            selectTime.setText(String.format("%02d",hour)+" : "+ String.format("%02d", min)+ " "+am_pm);
        },12,00,false);
        dialog.show();
    }


    public void saveReminder(View view){
        SQLiteManager sqLiteManager = SQLiteManager.instanceOfDatabase(this);
        String description = String.valueOf(descEditText.getText());
        if(selectedReminder == null){
            int id = Reminder.reminderArrayList.size();
            Reminder newRemind = new Reminder(id, day, month, year, hour, min, am_pm, description);
            Reminder.reminderArrayList.add(newRemind);
            sqLiteManager.addReminderToDatabase(newRemind);
        }
        else{

            selectedReminder.setDate_day(day);
            selectedReminder.setDate_month(month);
            selectedReminder.setDate_year(year);
            selectedReminder.setTime_hour(hour);
            selectedReminder.setTime_min(min);
            selectedReminder.setTime_am_pm(am_pm);
            sqLiteManager.updateReminderInDB(selectedReminder);
        }


        onBackPressed();
    }

    public void onBackPressed() {
        // TODO Auto-generated method stub
        super.onBackPressed();
        finish();
    }


    public void deleteNote(View view) {
        selectedReminder.setDeleted(true);
        SQLiteManager sqLiteManager = SQLiteManager.instanceOfDatabase(this);
        sqLiteManager.updateReminderInDB(selectedReminder);
        onBackPressed();
    }
}