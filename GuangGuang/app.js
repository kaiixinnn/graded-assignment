const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '', // Replace with your MySQL password
    // database: 'guangguang'
    host: 'sql.freedb.tech',
    user: 'freedb_Faith',
    password: 'zmeCKB@ry7H*eZE', // Replace with your MySQL password
    database: 'freedb_GuangGuang'

});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Function to fetch products from the database
function getProducts(callback) {
    const sql = "SELECT * FROM products";
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Database error", error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// Function to fetch clothes from the database
function getClothes(callback) {
    const sql = "SELECT * FROM clothes";
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Database error", error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// Function to fetch furniture from the database
function getFurniture(callback) {
    const sql = "SELECT * FROM furniture"; // Corrected table name
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Database error", error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// Set up view engine
app.set('view engine', 'ejs');

// Enable static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Home Page
app.get("/", (req, res) => {
    res.render('home');
});

// Main Product Page
app.get("/product", (req, res) => {
    getProducts((error, products) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        res.render('mainProduct', { products });
    });
});

// Main Clothes Page
app.get("/clothes", (req, res) => {
    getClothes((error, clothes) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        res.render('mainClothes', { clothes });
    });
});



// Clothes Page
app.get("/clothing", (req, res) => {
    getClothes((error, clothes) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        res.render('clothes', { clothes });
    });
});


// Main Furniture Page
app.get("/furnitures", (req, res) => {
    getFurniture((error, furniture) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        res.render('mainFurnitures', { furniture });
    });
});


// Furniture Page
app.get("/furniture", (req, res) => {
    getFurniture((error, furniture) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        res.render('furniture', { furniture });
    });
});


// Admin Products Page
app.get("/products", (req, res) => {
    getProducts((error, products) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        getClothes((error, clothes) => {
            if (error) {
                console.error("Database error", error);
                return res.status(500).send("Database error");
            }
            res.render('index', { products, clothes });
        });
    });
});

// Add Product Form
app.get("/addProduct", (req, res) => {
    res.render("addProduct");
});

// Process Add Product Form
app.post("/addProduct", (req, res) => {
    const { name, quantity, price, image } = req.body;
    const sql = "INSERT INTO products (productName, quantity, price, image) VALUES (?, ?, ?, ?)";
    connection.query(sql, [name, quantity, price, image], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /products after adding product
        res.redirect("/products");
    });
});

// Edit Product Form
app.get('/editProduct/:id', (req, res) => {
    const productId = req.params.id;
    const sql = "SELECT * FROM products WHERE productId = ?";
    connection.query(sql, [productId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('editProduct', { product: results[0] });
        } else {
            res.status(404).send("Product not found");
        }
    });
});

// Process Edit Product Form
app.post('/editProduct/:id', (req, res) => {
    const productId = req.params.id;
    const { name, quantity, price, image } = req.body;
    const sql = "UPDATE products SET productName = ?, quantity = ?, price = ?, image = ? WHERE productId = ?";
    connection.query(sql, [name, quantity, price, image, productId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /products after editing product
        res.redirect("/products");
    });
});

// Add Clothes Form
app.get("/addClothes", (req, res) => {
    res.render("addClothes");
});

// Process Add Clothes Form
app.post("/addClothes", (req, res) => {
    const { name, quantity, price, image, size, color, material } = req.body;
    const sql = "INSERT INTO clothes (clothesName, quantity, price, image, size, color, material) VALUES (?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, [name, quantity, price, image, size, color, material], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /clothes after adding clothes
        res.redirect("/clothes");
    });
});

// Add Furniture Form
app.get("/addFurniture", (req, res) => {
    res.render("addFurniture");
});

// Process Add Furniture Form
app.post("/addFurniture", (req, res) => {
    const { name, quantity, price, image, material } = req.body;
    const sql = "INSERT INTO furniture (furnitureName, quantity, price, image, material) VALUES (?, ?, ?, ?, ?)";
    connection.query(sql, [name, quantity, price, image, material], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /furnitures after adding furniture
        res.redirect("/furnitures");
    });
});

// Edit Clothing Form
app.get('/editClothing/:id', (req, res) => {
    const clothingId = req.params.id;
    const sql = "SELECT * FROM clothes WHERE clothesId = ?";
    connection.query(sql, [clothingId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('editClothes', { clothes: results[0] }); // Corrected view name to editClothes
        } else {
            res.status(404).send("Clothing not found");
        }
    });
});

// Process Edit Clothing Form
app.post('/editClothing/:id', (req, res) => {
    const clothingId = req.params.id;
    const { name, quantity, price, image, size, color, material } = req.body;
    const sql = "UPDATE clothes SET clothesName = ?, quantity = ?, price = ?, image = ?, size = ?, color = ?, material = ? WHERE clothesId = ?";
    connection.query(sql, [name, quantity, price, image, size, color, material, clothingId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /clothes after editing clothing
        res.redirect("/clothes");
    });
});

// Edit Furniture Form
app.get('/editFurniture/:id', (req, res) => {
    const furnitureId = req.params.id;
    const sql = "SELECT * FROM furniture WHERE furnitureId = ?";
    connection.query(sql, [furnitureId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('editFurniture', { furniture: results[0] });
        } else {
            res.status(404).send("Furniture not found");
        }
    });
});

// Process Edit Furniture Form
app.post('/editFurniture/:id', (req, res) => {
    const furnitureId = req.params.id;
    const { name, quantity, price, image, material } = req.body; // Remove 'size' from here
    const sql = "UPDATE furniture SET furnitureName = ?, quantity = ?, price = ?, image = ?, material = ? WHERE furnitureId = ?";
    connection.query(sql, [name, quantity, price, image, material, furnitureId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /furnitures after editing furniture
        res.redirect("/furnitures");
    });
});


// Delete Product
app.get('/deleteProduct/:id', (req, res) => {
    const productId = req.params.id;
    const sql = "DELETE FROM products WHERE productId = ?";
    connection.query(sql, [productId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /products after deleting product
        res.redirect("/products");
    });
});

// View Product Details
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM products WHERE productId = ?";
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('productDetails', { product: results[0] });
        } else {
            res.status(404).send("Product not found");
        }
    });
});

// View Clothing Item Details
app.get('/clothes/:id', (req, res) => {
    const clothesId = req.params.id;
    const sql = "SELECT * FROM clothes WHERE clothesId = ?";
    connection.query(sql, [clothesId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('clothesDetails', { clothes: results[0] });
        } else {
            res.status(404).send("Clothing item not found");
        }
    });
});

// View Furniture Details
app.get('/furniture/:id', (req, res) => {
    const furnitureId = req.params.id;
    const sql = "SELECT * FROM furniture WHERE furnitureId = ?";
    connection.query(sql, [furnitureId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        if (results.length > 0) {
            res.render('furnitureDetails', { furniture: results[0] });
        } else {
            res.status(404).send("Furniture not found");
        }
    });
});

// Delete Furniture
app.post('/deleteFurniture/:id', (req, res) => {
    const furnitureId = req.params.id;
    const sql = "DELETE FROM furniture WHERE furnitureId = ?";
    connection.query(sql, [furnitureId], (error, results) => {
        if (error) {
            console.error("Database error", error);
            return res.status(500).send("Database error");
        }
        // Redirect to /furnitures after deleting furniture
        res.redirect("/furnitures");
    });
});


// Login route
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.redirect('/products');
    } else {
        res.send('Please enter both username and password');
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
