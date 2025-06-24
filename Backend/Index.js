const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const cors = require("cors");
const authRoutes = require("./Routes/authroute")
const employeeRoutes = require("./Routes/employeeRoutes"); 
const reportRoutes = require("./Routes/reportRoutes");
const customerRoutes = require("./Routes/customerRoutes");
const feedbackRoutes = require("./Routes/feedbackRoute");
const contactRoutes = require("./Routes/contactRoutes");
const attendanceRoutes = require("./Routes/attendanceRoute");

const expenseRoutes = require("./Routes/expenseRoutes");
dotenv.config();
connectDB();

const app = express();
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5173', 'https://majisa-solar-services-e2nqckcit.vercel.app'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
      res.send("✅ Majisa Solar Backend is running!");
})

app.use('/api/auth', authRoutes); 
app.use("/api/employees", employeeRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", contactRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})