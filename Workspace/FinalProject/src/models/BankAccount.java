package models;

public class BankAccount {
	private final String bankName;
	private final String bankUserID;
	private int balance = 0;
	private int minimumBalance;
	private boolean blockSites;

	public BankAccount() {
		bankName = "[Unknown]";
		bankUserID = "[Unknown]";
		blockSites = false;
	}

	public BankAccount(String bankName, String bankUserID) {
		this.bankName = bankName;
		this.bankUserID = bankUserID;
	}

	public String getBankName() {
		return bankName;
	}

	public String getBankUserID() {
		return bankUserID;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public int removeFromBalance(int removedAmmount) {
		balance -= removedAmmount;
		checkBlockSites();
		return balance;
	}

	public void checkBlockSites() {
		if (balance <= minimumBalance) {
			blockSites = true;
		} else {
			blockSites = false;
		}
	}

	public int addToBalance(int addedAmmount) {
		balance += addedAmmount;
		return balance;
	}

	public boolean isBlockSites() {
		return blockSites;
	}

	public int getMinumumBalance() {
		return minimumBalance;
	}

	public void setMinumumBalance(int minumumBalance) {
		this.minimumBalance = minumumBalance;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Bank Name: ");
		sb.append(bankName);
		sb.append("\nBalance: ");
		sb.append(balance);
		return sb.toString();
	}

}
