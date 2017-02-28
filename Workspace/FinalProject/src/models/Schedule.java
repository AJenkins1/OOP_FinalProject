package models;

public class Schedule {
	private String plans;
	private int hour;
	private int minute;
	private boolean blockSites;

	public String getPlans() {
		return plans;
	}

	public void setPlans(String plans) {
		this.plans = plans;
	}

	public int getHour() {
		return hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}

	public int getMinute() {
		return minute;
	}

	public void setMinute(int minute) {
		this.minute = minute;
	}

	public boolean isBlockSites() {
		return blockSites;
	}

	public void setBlockSites(boolean blockSites) {
		this.blockSites = blockSites;
	}
}
