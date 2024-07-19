package com.example.reminderapp2;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;


public class SQLiteManager extends SQLiteOpenHelper {

    private static SQLiteManager sqLiteManager;
    private static final String DATABASE_NAME = "ReminderDB";
    private static final int DATABASE_VERSION = 1;
    private static final String TABLE_NAME = "Reminder_Table";

    private static final String ID_FIELD = "id";
    private static final String COUNTER = "counter";

    private static final String DAY_FIELD = "day";
    private static final String MONTH_FIELD = "month";
    private static final String YEAR_FIELD = "year";
    private static final String HOUR_FIELD = "hour";
    private static final String MIN_FIELD = "minute";
    private static final String AMPM_FIELD = "am_pm";
    private static final String DESCRIPTION = "description";


    public SQLiteManager(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    public static SQLiteManager instanceOfDatabase(Context context){
        if(sqLiteManager==null)
            sqLiteManager = new SQLiteManager(context);

        return sqLiteManager;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        StringBuilder sql;

        sql= new StringBuilder()
                .append("CREATE TABLE ")
                .append(TABLE_NAME)
                .append("(")
                .append(COUNTER)
                .append(" INTEGER PRIMARY KEY AUTOINCREMENT,")
                .append(ID_FIELD)
                .append(" INTEGER, ")
                .append(DAY_FIELD)
                .append(" INTEGER,")
                .append(MONTH_FIELD)
                .append(" INTEGER,")
                .append(YEAR_FIELD)
                .append(" INTEGER,")
                .append(HOUR_FIELD)
                .append(" INTEGER,")
                .append(MIN_FIELD)
                .append(" INTEGER,")
                .append(AMPM_FIELD)
                .append(" TEXT,")
                .append(DESCRIPTION)
                .append(" TEXT)");

        db.execSQL(sql.toString());

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }

    public void addReminderToDatabase(Reminder reminder){
        SQLiteDatabase sqLiteDatabase = this.getWritableDatabase();

        ContentValues contentValues = new ContentValues();

        contentValues.put(ID_FIELD,reminder.getId());
        contentValues.put(DAY_FIELD,reminder.getDate_day());
        contentValues.put(MONTH_FIELD,reminder.getDate_month());
        contentValues.put(YEAR_FIELD,reminder.getDate_year());
        contentValues.put(HOUR_FIELD,reminder.getTime_hour());
        contentValues.put(MIN_FIELD,reminder.getTime_min());
        contentValues.put(AMPM_FIELD,reminder.getTime_am_pm());
        contentValues.put(DESCRIPTION,reminder.getDescription());

        sqLiteDatabase.insert(TABLE_NAME,null,contentValues);
    }

    public void populateReminderListArray(){
        SQLiteDatabase sqLiteDatabase = this.getReadableDatabase();

        try (Cursor result = sqLiteDatabase.rawQuery("SELECT * FROM " + TABLE_NAME,null))
        {
            if(result.getCount()!=0)
            {
                while(result.moveToNext())
                {
                    int id = result.getInt(1);
                    int day = result.getInt(2);
                    int month = result.getInt(3);
                    int year = result.getInt(4);
                    int hour = result.getInt(5);
                    int minute = result.getInt(6);
                    String am_pm =  result.getString(7);
                    String description = result.getString(8);
                    Reminder reminder = new Reminder(id,day,month,year,hour,minute,am_pm,description);
                    Reminder.reminderArrayList.add(reminder);
                }

            }
        }
    }

    public void updateReminderInDB(Reminder reminder){
        SQLiteDatabase sqLiteDatabase = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();

        contentValues.put(ID_FIELD,reminder.getId());
        contentValues.put(DAY_FIELD,reminder.getDate_day());
        contentValues.put(MONTH_FIELD,reminder.getDate_month());
        contentValues.put(YEAR_FIELD,reminder.getDate_year());
        contentValues.put(HOUR_FIELD,reminder.getTime_hour());
        contentValues.put(MIN_FIELD,reminder.getTime_min());
        contentValues.put(AMPM_FIELD,reminder.getTime_am_pm());
        contentValues.put(DESCRIPTION,reminder.getDescription());

        sqLiteDatabase.update(TABLE_NAME,contentValues,ID_FIELD+" =?",new String[]{String.valueOf(reminder.getId())});
    }
}
