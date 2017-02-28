package app;

import models.BankAccount;

public class Logic {
	// Universal
	public static void blockSites() {
		
	}

	public static void newUser() {
		
	}

	// TimeManager
	public static void makePlans() {
		
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