import React from 'react'
import "./sell.css"
export const Sell = () => {
  return (
    <div className='selling-form'>
    <form action="#">

        <div class="Product-info">

        <h3>Type of Product</h3>
        <input type="text" required/>
        </div>

        <div class="Product-info">
          <h3>Product Specifications</h3>
          <input type="text" required/>
        </div>

        <div class="Product-info">
            <h3>Selling Price</h3>
            <input type="number" required/>
        </div>

        <div class="Product-info">
            <h3>Buying Date</h3>
            <input type="date" required/>
        </div>

        <div class="Product-info">
            <h3>Buying Price</h3>
            <input type="number" required/>
        </div>

        <div class="Product-info">
            <h3>Upload Photo</h3>
            <input type="file" id="files" name="files" multiple/>
        </div>

        <div class="Product-info">
            <h3>Name</h3>
            <input type="text" required/>
        </div>

        <div class="Product-info">
            <h3>Mobile Number</h3>
            <input type="tel" required/>
        </div>

        <div class="Product-info">
            <h3>Location</h3>
            <input type="text" required/>
        </div> 
            <button>Post</button>
    </form>
   <footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h3>Useful Links</h3>
            <ul>
                <li>FAQs</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Policies</h3>
            <ul>
                <li>Terms & Conditions</li>
                <li>Exchange Policy</li>
                <li>Shipping Policy</li>
            </ul>
        </div>
    </div>
</footer>
</div> 
  );
}

