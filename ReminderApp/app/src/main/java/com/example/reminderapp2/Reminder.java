package com.example.reminderapp2;

import android.widget.Toast;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class Reminder {

    public static ArrayList<Reminder> reminderArrayList = new ArrayList<>();
    public static ArrayList<Reminder> nonDeleted = new ArrayList<>();

    public static String REMINDER_EDIT_EXTRA = "reminderEdit";
    private int id;
    private int date_day;
    private int date_month;
    private int date_year;
    private int time_hour;
    private int time_min;
    private String time_am_pm;
    private String description;

    private boolean deleted = false;

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Reminder(int id, int date_day, int date_month, int date_year, int time_hour, int time_min, String time_am_pm, String description) {
        this.id = id;
        this.date_day = date_day;
        this.date_month = date_month;
        this.date_year = date_year;
        this.time_hour = time_hour;
        this.time_min = time_min;
        this.time_am_pm = time_am_pm;
        this.description = description;
    }

    public static Reminder getReminderForID(int passedReminderID) {
        for(Reminder reminder: reminderArrayList)
        {
            if(reminder.getId() == passedReminderID)
                return reminder;
        }
        return null;
    }

    public static ArrayList<Reminder> nonDeletedReminder(){
        for(Reminder reminder : reminderArrayList){
            if(reminder.isDeleted() == false){
                nonDeleted.add(reminder);
            }
        }
        return nonDeleted;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDate_day() {
        return date_day;
    }

    public void setDate_day(int date_day) {
        this.date_day = date_day;
    }

    public int getDate_month() {
        return date_month;
    }

    public void setDate_month(int date_month) {
        this.date_month = date_month;
    }

    public int getDate_year() {
        return date_year;
    }

    public void setDate_year(int date_year) {
        this.date_year = date_year;
    }

    public int getTime_hour() {
        return time_hour;
    }

    public void setTime_hour(int time_hour) {
        this.time_hour = time_hour;
    }

    public int getTime_min() {
        return time_min;
    }

    public void setTime_min(int time_min) {
        this.time_min = time_min;
    }

    public String getTime_am_pm() {
        return time_am_pm;
    }

    public void setTime_am_pm(String time_am_pm) {
        this.time_am_pm = time_am_pm;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
