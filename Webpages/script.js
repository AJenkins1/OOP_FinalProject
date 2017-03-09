var models;
(function (models) {
    var ArrayList = [];
    var Schedule = (function () {
        function Schedule(plans, beginingHour, endingHour, beginingMinute, endingMinute, blockSites) {
           this.plans = plans;
            this.beginingHour = beginingHour;
            this.endingHour = endingHour;
            this.beginingMinute = beginingMinute;
            this.endingMinute = endingMinute;
            this.blockSites = blockSites;
        }
        Schedule.prototype.getPlans = function () {
            return this.plans;
        };
        Schedule.prototype.setPlans = function (plans) {
            this.plans = plans;
        };
        Schedule.prototype.getBeginingHour = function () {
            return this.beginingHour;
        };
        Schedule.prototype.setBeginingHour = function (beginingHour) {
            this.beginingHour = beginingHour;
        };
        Schedule.prototype.getEndingMinute = function () {
            return this.endingMinute;
        };
        Schedule.prototype.setEndingMinute = function (endingMinute) {
            this.endingMinute = endingMinute;
        };
        Schedule.prototype.getBeginingMinute = function () {
            return this.beginingMinute;
        };
        Schedule.prototype.setBeginingMinute = function (beginingMinute) {
            this.beginingMinute = beginingMinute;
        };
        Schedule.prototype.getEndingHour = function () {
            return this.endingHour;
        };
        Schedule.prototype.setEndingHour = function (endingHour) {
            this.endingHour = endingHour;
        };
        Schedule.prototype.isBlockSites = function () {
            return this.blockSites;
        };
        Schedule.prototype.setBlockSites = function (blockSites) {
            this.blockSites = blockSites;
        };
        return Schedule;
    }());
    models.Schedule = Schedule;
    Schedule["__class"] = "models.Schedule";
    var Day = (function () {
        function Day(numericDay, month, year) {
           this.year = year;
            this.month = month;
            this.day = day;
        }
        Day.prototype.getNumericDay = function () {
            return this.numericDay;
        };
        Day.prototype.setNumericDay = function (numericDay) {
            this.numericDay = numericDay;
        };
        Day.prototype.getMonth = function () {
            return this.month;
        };
        Day.prototype.setMonth = function (month) {
            this.month = month;
        };
        Day.prototype.getYear = function () {
            return this.year;
        };
        Day.prototype.setYear = function (year) {
            this.year = year;
        };
        Day.prototype.getSchedules = function () {
            return this.schedules;
        };
        Day.prototype.setSchedules = function (plan) {
            this.schedules.add(plan);
        };
        Day.prototype.removeSchedules = function (plan) {
            if (this.schedules.contains(plan)) {
                this.schedules.remove(plan);
            }
        };
        return Day;
    }());
    models.Day = Day;
    Day["__class"] = "models.Day";
    var BankAccount = (function () {
        function BankAccount(bankName, bankUserID) {
            if (((typeof bankName === 'string') || bankName === null) && ((typeof bankUserID === 'string') || bankUserID === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.balance = 0;
                this.minimumBalance = 0;
                this.blockSites = false;
                (function () {
                    this.bankName = bankName;
                    this.bankUserID = bankUserID;
                })();
            }
            else if (bankName === undefined && bankUserID === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                this.balance = 0;
                this.minimumBalance = 0;
                this.blockSites = false;
                (function () {
                    this.bankName = "[Unknown]";
                    this.bankUserID = "[Unknown]";
                    this.blockSites = false;
                })();
            }
            else throw new Error('invalid overload');
        }
        BankAccount.prototype.getBankName = function () {
            return this.bankName;
        };
        BankAccount.prototype.getBankUserID = function () {
            return this.bankUserID;
        };
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        BankAccount.prototype.setBalance = function (balance) {
            this.balance = balance;
        };
        BankAccount.prototype.removeFromBalance = function (removedAmmount) {
            this.balance -= removedAmmount;
            this.checkBlockSites();
            return this.balance;
        };
        BankAccount.prototype.checkBlockSites = function () {
            if (this.balance <= this.minimumBalance) {
                this.blockSites = true;
            }
            else {
                this.blockSites = false;
            }
        };
        BankAccount.prototype.addToBalance = function (addedAmmount) {
            this.balance += addedAmmount;
            return this.balance;
        };
        BankAccount.prototype.isBlockSites = function () {
            return this.blockSites;
        };
        BankAccount.prototype.getMinumumBalance = function () {
            return this.minimumBalance;
        };
        BankAccount.prototype.setMinumumBalance = function (minumumBalance) {
            this.minimumBalance = minumumBalance;
        };
        return BankAccount;
    }());
    models.BankAccount = BankAccount;
    BankAccount["__class"] = "models.BankAccount";
    var Logic = (function () {
        function Logic() {}
        Logic.blockSites = function () {};
        Logic.newUser = function (name) {
            var newUser = new User(name);
            Logic.users.add(newUser);
        };
        Logic.makePlans = function (numericDay, month, year, plans, beginingHour, endingHour, beginingMinute, endingMinute, blockSites) {
            var newPlans = new Schedule(plans, beginingHour, endingHour, beginingMinute, endingMinute, blockSites);
            var newDay = new Day(numericDay, month, year);
            var compare = newDay.getSchedules();
            if (compare.contains(newPlans)) {
                return "You have already made these plans.";
            }
            else {
                newDay.setSchedules(newPlans);
                if (Logic.checkForScheduleOverlap(newDay)) {
                    return "You planned over this time already.";
                }
                else {
                    return "Plans added";
                }
            }
        };
        Logic.checkForScheduleOverlap = function (newDay) {
            if (Logic.currentUser.getScheduledDates().contains(newDay.getMonth()) && Logic.currentUser.getScheduledDates().contains(newDay.getNumericDay())) {
                for (var i = 0; i < Logic.currentUser.getScheduledDates().size(); i++) {
                    if ((Logic.currentUser.getScheduledDates().get(i).getMonth() === newDay.getMonth())) {
                        if (Logic.currentUser.getScheduledDates().get(i).getNumericDay() === newDay.getNumericDay()) {
                            Logic.currentUser.getScheduledDates().get(i).setSchedules(newDay.getSchedules().get(0));
                        }
                    }
                }
                return true;
            }
            else {
                return false;
            }
        };
        Logic.displayBalance = function (account) {
            return account.getBalance();
        };
        Logic.addToBalance = function (addedAmmount, account) {
            if (account.getBalance() < 0 && account.getBalance() + addedAmmount > 0) {
                account.addToBalance(addedAmmount);
                return "You are no longer at a negative balance";
            }
            else if (account.getBalance() > account.getMinumumBalance()) {
                account.addToBalance(addedAmmount);
                return "You are above your minumum budget.";
            }
            else {
                account.addToBalance(addedAmmount);
                return "The ammount has been added to the account";
            }
        };
        Logic.removeFromBalance = function (ammountRemoved, account) {
            account.removeFromBalance(ammountRemoved);
            if (account.getBalance() < 0) {
                return "You have dipped into negative funds";
            }
            else if (account.getBalance() < account.getMinumumBalance()) {
                return "You are now below your alloted minumum balance";
            }
            else {
                return "The funds have been removed";
            }
        };
        return Logic;
    }());
    models.Logic = Logic;
    Logic["__class"] = "models.Logic";
})(models || (models = {}));