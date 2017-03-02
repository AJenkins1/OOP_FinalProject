package models;

import java.util.ArrayList;

public class User {
	public ArrayList<BankAccount> accounts = new ArrayList<>();
	private String name;
	private ArrayList<String> blockedWebsites;
	private BankAccount account;
	private ArrayList<Day> scheduledDates;

	public User(String name) {
		setName(name);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		if (name != null & !name.isEmpty()) {
			this.name = name;
		}
		
	}

	public ArrayList<String> getBlockedWebsites() {
		return blockedWebsites;
	}

	public void setBlockedWebsites(ArrayList<String> blockedWebsites) {
		this.blockedWebsites = blockedWebsites;
	}

	public BankAccount getAccount() {
		return account;
	}

	public void setAccount(BankAccount account) {
		this.account = account;
	}

	public ArrayList<Day> getScheduledDates() {
		return scheduledDates;
	}

	public void addScheduledDates(Day plans) {
		this.scheduledDates.add(plans);
	}

	public void removeScheduledDates(Day thisDaysPlans) {
		if (this.scheduledDates.contains(thisDaysPlans)) {
			this.scheduledDates.remove(thisDaysPlans);
		}
	}

	public String addBankAccount(String bankName, String bankUserID) {
		BankAccount newAccount = new BankAccount(bankName, bankUserID);
		accounts.add(newAccount);
		return "The Account has been added";
	}

	public String removeBankAccount(BankAccount account) {
		if (accounts.contains(account)) {
			accounts.remove(account);
			return "The account has been removed.";
		} else {
			return "This account does not exist with this user.";
		}
	}

	public BankAccount getBankAccount() {

		return account;
	}
}
