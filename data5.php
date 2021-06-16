<?php
    $pdo = new PDO("mysql:host=localhost:3306;dbname=projet", "root", "", [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    $stmt = $pdo->prepare("SELECT * FROM stat_fr WHERE Year=2021;");
    $stmt->execute();
    $statFR = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $statFR = $statFR[0];
    
    echo "<table>
    <tr>
    <th>Viewer Moyen</th>
    <th>Viewer Max</th>
    </tr>";
    echo "<tr>";
    echo "<td>" . $statFR['viewerMoyen'] . "</td>";
    echo "<td>" . $statFR['viewerMax'] . "</td>";
    echo "</tr>";
    echo "</table>";
?>