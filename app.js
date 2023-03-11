// Imports -----------------------------
import express from 'express';
import cors from 'cors';
import bookingsRouter from './routers/bookings-router.js'
import vehiclesRouter from './routers/vehicles-router.js'
import usersRouter from './routers/users-router.js'
// Configure express app ---------------
const app = new express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure middleware ----------------
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({ origin: '*' }));





// Endpoints ---------------------------
app.use('/api/bookings', bookingsRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/users', usersRouter);



// Start server ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));