# WebApplicationAndDevelopment

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IPL Ticket Booking</title>
</head>
<body>

    <header id="top">
        <h1>IPL Ticket Booking</h1>
        <nav>
            <a href="#matches">Matches</a>
            <a href="#book-ticket">Book Ticket</a>
            <a href="#my-bookings">My Bookings</a>
            <a href="#guidelines">Guidelines</a>
        </nav>
    </header>

    <main>

        <section id="hero">
            <h2>Experience The Stadium Energy Live!</h2>
            <p>Book your tickets and enjoy the thrill of IPL matches live in the stadium.</p>
            <button onclick="location.href='#matches'">View Schedule</button>
            <button onclick="location.href='#book-ticket'">Book Ticket</button>
        </section>

        <section id="about">
            <h2>About IPL 2026</h2>
            <p>The Indian Premier League (IPL) is a popular T20 cricket league where top teams compete across India.</p>

            <h3>Popular Teams</h3>
            <ul>
                <li>Royal Challengers Bengaluru (RCB)</li>
                <li>Chennai Super Kings (CSK)</li>
                <li>Mumbai Indians (MI)</li>
                <li>Kolkata Knight Riders (KKR)</li>
            </ul>

            <h3>Major Venues</h3>
            <ul>
                <li>M. Chinnaswamy Stadium, Bengaluru</li>
                <li>M. A. Chidambaram Stadium, Chennai</li>
                <li>Wankhede Stadium, Mumbai</li>
                <li>Eden Gardens, Kolkata</li>
            </ul>
        </section>

        <section id="matches">
            <h2>Match Schedule</h2>
            <p>Note: Match details and prices are examples for demonstration, not verified official prices.</p>

            <label for="team-filter">Filter by Team:</label>
            <select id="team-filter" name="team-filter">
                <option value="all">All Teams</option>
                <option value="rcb">RCB</option>
                <option value="csk">CSK</option>
                <option value="mi">MI</option>
                <option value="kkr">KKR</option>
            </select>

            <table border="1">
                <thead>
                    <tr>
                        <th>Match Number</th>
                        <th>Teams</th>
                        <th>Date &amp; Time</th>
                        <th>Venue</th>
                        <th>General</th>
                        <th>Premium</th>
                        <th>VIP</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>RCB vs CSK</td>
                        <td>To be announced</td>
                        <td>Bengaluru</td>
                        <td>₹800</td>
                        <td>₹2,000</td>
                        <td>₹5,000</td>
                        <td><a href="#book-ticket">Book</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MI vs KKR</td>
                        <td>To be announced</td>
                        <td>Mumbai</td>
                        <td>₹900</td>
                        <td>₹2,500</td>
                        <td>₹6,000</td>
                        <td><a href="#book-ticket">Book</a></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <div id="booking-area">

            <section id="book-ticket">
                <h2>Ticket Booking Form</h2>

                <form id="booking-form">
                    <p>
                        <label for="match">Match:</label>
                        <select id="match" name="match" required>
                            <option value="">-- Select a match --</option>
                            <option value="1">Match 1: RCB vs CSK</option>
                            <option value="2">Match 2: MI vs KKR</option>
                        </select>
                    </p>

                    <p>
                        <label for="stand">Stand Category:</label>
                        <select id="stand" name="stand" required>
                            <option value="">-- Select a stand --</option>
                            <option value="general">General</option>
                            <option value="premium">Premium</option>
                            <option value="vip">VIP</option>
                        </select>
                    </p>

                    <p>
                        <label for="tickets">Number of Tickets:</label>
                        <input type="number" id="tickets" name="tickets" min="1" max="6" required>
                    </p>

                    <p>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </p>

                    <p>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </p>

                    <p>
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" maxlength="10" placeholder="10-digit number" required>
                    </p>

                    <button type="submit">Confirm Booking</button>
                </form>
            </section>

            <section id="booking-summary">
                <h2>Booking Summary</h2>

                <article>
                    <p>Selected Match: <strong>--</strong></p>
                    <p>Stand Category: <strong>--</strong></p>
                    <p>Ticket Price: <strong>₹0</strong></p>
                    <p>Quantity: <strong>0</strong></p>
                    <p>Total Amount: <strong>₹0</strong></p>
                </article>
                <p>Placeholder values only.</p>
            </section>

        </div>

        <section id="my-bookings">
            <h2>My Ticket Bookings</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Match</th>
                        <th>Stand</th>
                        <th>Tickets</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6">No bookings yet.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="guidelines">
            <h2>Guidelines</h2>

            <article>
                <h3>Ticket Verification</h3>
                <p>Keep your ticket ready for entry.</p>
            </article>

            <article>
                <h3>ID Proof Requirement</h3>
                <p>Carry a valid photo ID.</p>
            </article>

            <article>
                <h3>Prohibited Items</h3>
                <p>Follow stadium security restrictions.</p>
            </article>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 IPL Ticket Booking. All rights reserved.</p>
    </footer>
    <script>
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Booking submitted successfully!");
    });
</script>
</body>
</html>