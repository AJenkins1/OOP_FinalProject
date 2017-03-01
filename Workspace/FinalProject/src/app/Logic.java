package app;

import java.util.ArrayList;

import models.BankAccount;
import models.User;

public class Logic {
	public static ArrayList<User> users;

	// Universal
	public static void blockSites() {

	}

	public static void newUser(String name) {
		User newUser = new User(name);
		users.add(newUser);
	}

	// TimeManager
	public static void makePlans() {
	
		checkForScheduleOverlap();
	}

	public static void checkForScheduleOverlap() {

	}

	// Budgeter
	public static int displayBalance(BankAccount account) {
		return account.getBalance();
	}

	public static String addToBalance(int addedAmmount, BankAccount account) {
		if (account.getBalance() < 0 && account.getBalance() + addedAmmount > 0) {
			account.addToBalance(addedAmmount);
			return "You are no longer at a negative balance";
		} else {
			account.addToBalance(addedAmmount);
			return "The ammount has been added to the account";
		}
	}

	public static String removeFromBalance(int ammountRemoved, BankAccount account) {
		account.removeFromBalance(ammountRemoved);
		if (account.getBalance() < 0) {
			return "You have dipped into negative funds";
		} else {
			return "The funds have been removed";
		}
	}
}