<!DOCTYPE html>
<html>
<head>
    <title>Checkout</title>
</head>
<body>
    <?php
        // Retrieving the quantity from the URL query parameter
        $quantity = isset($_GET['quantity']) ? intval($_GET['quantity']) : 0;

        // Here, you can handle the checkout logic securely and process the order.
        // For this example, we will just display the selected quantity.
        echo "<h1>Checkout</h1>";
        echo "<p>Selected Quantity: $quantity</p>";
    ?>
</body>
</html>
