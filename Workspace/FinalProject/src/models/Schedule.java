package models;

public class Schedule {
	private String plans;
	private int beginingHour;
	private int endingHour;
	private int beginingMinute;
	private int endingMinute;
	private boolean blockSites;

	Schedule(String plans, int beginingHour, int endingHour, int beginingMinute, int endingMinute, boolean blockSites){
		
	}
	public String getPlans() {
		return plans;
	}

	public void setPlans(String plans) {
		this.plans = plans;
	}

	public int getBeginingHour() {
		return beginingHour;
	}

	public void setBeginingHour(int beginingHour) {
		this.beginingHour = beginingHour;
	}

	public int getEndingMinute() {
		return endingMinute;
	}

	public void setEndingMinute(int endingMinute) {
		this.endingMinute = endingMinute;
	}

	public int getBeginingMinute() {
		return beginingMinute;
	}

	public void setBeginingMinute(int beginingMinute) {
		this.beginingMinute = beginingMinute;
	}

	public int getEndingHour() {
		return endingHour;
	}

	public void setEndingHour(int endingHour) {
		this.endingHour = endingHour;
	}

	public boolean isBlockSites() {
		return blockSites;
	}

	public void setBlockSites(boolean blockSites) {
		this.blockSites = blockSites;
	}

}
