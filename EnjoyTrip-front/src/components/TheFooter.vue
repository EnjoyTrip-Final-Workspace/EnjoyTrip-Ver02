<template>
  <footer class="the-footer">
    <div class="footer-top-border"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3 class="footer-column-title">Company</h3>
          <ul class="footer-column-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-column-title">Services</h3>
          <ul class="footer-column-list">
            <li><a href="#">Product 1</a></li>
            <li><a href="#">Product 2</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-column-title">Support</h3>
          <ul class="footer-column-list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 My Website. All rights reserved.</p>
        <p>ldg & chy</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.the-footer {
  background-color: #ffffff;
  padding: 10px 0;
  text-align: center;
}

.footer-top-border {
  border-top: 1px solid #dddddd;
  margin-bottom: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin-bottom: 20px; */
}

.footer-column {
  flex-basis: 33.33%;
  text-align: left;
  margin-bottom: 10px;
}

.footer-column-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.footer-column-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-column-list li {
  margin-bottom: 10px;
}

.footer-column-list a {
  color: #777;
  text-decoration: none;
}

.footer-column-list a:hover {
  text-decoration: underline;
}

.footer-bottom {
  /* margin-top: 10px; */
  /* color: #333; */
  color: #777;
}
</style>
