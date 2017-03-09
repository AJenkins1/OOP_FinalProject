var models;
(function (models) {
    var ArrayList = [];
    var Schedule = (function () {
        function Schedule(plans, beginingHour, endingHour, beginingMinute, endingMinute, blockSites) {
            this.beginingHour = 0;
            this.endingHour = 0;
            this.beginingMinute = 0;
            this.endingMinute = 0;
            this.blockSites = false;
            this.setPlans(plans);
            this.setBeginingHour(beginingHour);
            this.setEndingHour(endingHour);
            this.setBeginingMinute(beginingMinute);
            this.setEndingMinute(endingMinute);
            this.setBlockSites(blockSites);
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
    var User = (function () {
        function User(name) {
            this.accounts = (new ArrayList());
            this.setName(name);
        }
        User.prototype.getName = function () {
            return this.name;
        };
        User.prototype.setName = function (name) {
            if (name !== null && (name.length > 0 || name.length < 0)) {
                this.name = name;
            }
        };
        User.prototype.getBlockedWebsites = function () {
            return this.blockedWebsites;
        };
        User.prototype.setBlockedWebsites = function (blockedWebsites) {
            this.blockedWebsites = blockedWebsites;
        };
        User.prototype.getAccount = function () {
            return this.account;
        };
        User.prototype.setAccount = function (account) {
            this.account = account;
        };
        User.prototype.getScheduledDates = function () {
            return this.scheduledDates;
        };
        User.prototype.addScheduledDates = function (plans) {
            this.scheduledDates.add(plans);
        };
        User.prototype.removeScheduledDates = function (thisDaysPlans) {
            if (this.scheduledDates.contains(thisDaysPlans)) {
                this.scheduledDates.remove(thisDaysPlans);
            }
        };
        User.prototype.addBankAccount = function (bankName, bankUserID) {
            var newAccount = new BankAccount(bankName, bankUserID);
            this.accounts.add(newAccount);
            return "The Account has been added";
        };
        User.prototype.removeBankAccount = function (account) {
            if (this.accounts.contains(account)) {
                this.accounts.remove(account);
                return "The account has been removed.";
            }
            else {
                return "This account does not exist with this user.";
            }
        };
        User.prototype.getBankAccount = function () {
            return this.account;
        };
        return User;
    }());
    models.User = User;
    User["__class"] = "models.User";
    var Day = (function () {
        function Day(numericDay, month, year) {
            this.schedules = (new ArrayList());
            this.numericDay = 0;
            this.year = 0;
            this.setYear(year);
            this.setNumericDay(numericDay);
            this.setMonth(month);
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
            var _this = this;
            this.balance = 0;
            if (((typeof bankName === 'string') || bankName === null) && ((typeof bankUserID === 'string') || bankUserID === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.balance = 0;
                this.minimumBalance = 0;
                this.blockSites = false;
                (function () {
                    _this.bankName = bankName;
                    _this.bankUserID = bankUserID;
                })();
            }
            else if (bankName === undefined && bankUserID === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                this.balance = 0;
                this.minimumBalance = 0;
                this.blockSites = false;
                (function () {
                    _this.bankName = "[Unknown]";
                    _this.bankUserID = "[Unknown]";
                    _this.blockSites = false;
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