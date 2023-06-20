const User = require("../models/user");
const Bill = require("../models/bill");
const Customer = require("../models/customer");

const getUserRecords = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const companyUsers = await User.find({ companyId: user.companyId });
    const userIds = companyUsers.map((u) => u._id);

    const companyBills = await Bill.find({ userId: { $in: userIds } });
    const companyCustomers = await Customer.find({ userId: { $in: userIds } });

    if (companyBills.length == 0 && companyCustomers.length == 0){
        res.json({ message: "No records found for the company Bills & Customers" });
    }
    else if (companyBills.length == 0) {
        res.render('records', { users : companyUsers, bills:"No records found for the company Bills" ,customers: companyCustomers })
    }
    else if (companyCustomers.length == 0 ) {
        res.render('records', { users : companyUsers, bills: companyBills, customers:  "No records found for the company Customers" })
    }
    res.render('records', { users : companyUsers, bills: companyBills, customers: companyCustomers });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUserRecords };
