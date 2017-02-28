package models;

public class Day extends Schedule{

	private int numericDay;
	private String month;
	private int year;
	
	public Day(int numericDay, String month, int year) {
		this.year = year;
		this.numericDay = numericDay;
		this.month = month;
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

}