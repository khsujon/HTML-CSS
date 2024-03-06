<!DOCTYPE html>
<html>
<head>
    <title>Order Confirmation</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Order Confirmation</h1>

    <?php
    // Process the form submission
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Retrieve selected products from the form
        $category1 = $_POST['category1'];
        $category2 = $_POST['category2'];

        // Calculate total cost
        $product1Price = 10; // Retrieve from database or set prices
        $product2Price = 15; // Retrieve from database or set prices
        $product3Price = 20; // Retrieve from database or set prices
        $product4Price = 25; // Retrieve from database or set prices

        $totalCost = 0;
        $orderedProducts = [];

        if ($category1 === 'product1') {
            $totalCost += $product1Price;
            $orderedProducts[] = 'Product 1';
        } elseif ($category1 === 'product2') {
            $totalCost += $product2Price;
            $orderedProducts[] = 'Product 2';
        }

        if ($category2 === 'product3') {
            $totalCost += $product3Price;
            $orderedProducts[] = 'Product 3';
        } elseif ($category2 === 'product4') {
            $totalCost += $product4Price;
            $orderedProducts[] = 'Product 4';
        }

        // Display ordered product list
        echo '<h2>Ordered Products:</h2>';
        if (count($orderedProducts) > 0) {
            echo '<ul>';
            foreach ($orderedProducts as $product) {
                echo '<li>' . $product . '</li>';
            }
            echo '</ul>';
        } else {
            echo '<p>No products ordered.</p>';
        }

        // Calculate shipping cost (example: $5 per product)
        $shippingCost = count($orderedProducts) * 5;

        // Display total cost and shipping cost
        echo '<h3>Total Cost:</h3>';
        echo '<p>Total Cost: $' . $totalCost . '</p>';
        echo '<p>Shipping Cost: $' . $shippingCost . '</p>';
        echo '<p>Grand Total: $' . ($totalCost + $shippingCost) . '</p>';

        // Display "Thank you" message
        echo '<h3>Thank you for your order!</h3>';
    } else {
        echo '<p>No order placed.</p>';
    }
    ?>

</body>
</html>
