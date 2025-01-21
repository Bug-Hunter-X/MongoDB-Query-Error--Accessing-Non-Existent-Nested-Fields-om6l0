```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, user) => {
  if (err) {
    console.error('Error:', err);
  } else if (user === null) {
    console.log('User not found');
  } else {
    // Check for the existence of nested fields before accessing them
    if (user.address && user.address.street) {
      console.log(user.address.street);
    } else {
      console.log('Address or street field not found in user document.');
    }
  }
});
```