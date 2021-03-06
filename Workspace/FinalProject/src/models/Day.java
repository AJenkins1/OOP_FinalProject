package models;

import java.util.ArrayList;

public class Day {

	private int numericDay;
	private String month;
	private int year;
	private ArrayList<Schedule> schedules = new ArrayList<Schedule>();

	public Day(int numericDay, String month, int year) {
		setYear(year);
		setNumericDay(numericDay);
		setMonth(month);
	}

	public int getNumericDay() {
		return numericDay;
	}

	public void setNumericDay(int numericDay) {
		this.numericDay = numericDay;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public ArrayList<Schedule> getSchedules() {
		return schedules;
	}

	public void setSchedules(Schedule plan) {
		schedules.add(plan);
	}

	public void removeSchedules(Schedule plan) {
		if (schedules.contains(plan)) {
			schedules.remove(plan);
		}
	}

}