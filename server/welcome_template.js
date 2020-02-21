const Welcome = (name) => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
</head>
<body style="margin:0px;padding:5px">
    <div>
        <p>Welcome ${name} to CSM Wealth,a company dedicated to being a distinctive and trusted provider of asset management solutions for individual and institutional investors.
        </p>
        <p>Our goal is to offer clients high-quality, well-performing investment strategies that meet multiple financial needs. To accomplish this, we employ a multi-manager, multi-strategy approach that delivers a broad array of investment strategies from affiliated managers and select subadvisers.
        </p>
        <p>Each of our investment brokers has a distinct investment philosophy and style, with talent and discipline that have been tested through market cycles and validated by performance over time. Importantly, they all share an unwavering commitment to investor success.
        </p>
        <p>On behalf of the entire team at CSM Wealth , I welcome you to learn more about our brokerage company and investment portfolio that make us a company with a singular focus on providing long-term investment solutions. We hope you will consider joining us as a client.
        </p>
    </div>
    <div style="text-align:left">
        <p>Mitchell Colin</p>
        <p>Executive Director/Chief Executive Officer</p>
    </div>
</body>
</html>
    `
}

module.exports = {Welcome}