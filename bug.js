```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, user) => {
  if (err) {
    console.error('Error:', err);
  } else if (user === null) {
    console.log('User not found');
  } else {
    // Accessing nested fields without checking for their existence
    console.log(user.address.street);
  }
});
```