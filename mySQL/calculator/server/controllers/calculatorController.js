exports.calculate = (req, res) => {
    const { num1, num2, operator } = req.body;

    if (num1 === undefined || num2 === undefined || !operator) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Division by zero is not allowed' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator' });
    }

    res.json({ result });
};