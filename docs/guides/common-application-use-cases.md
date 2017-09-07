# Common application use cases

In this section, you will see code examples for the most common operations:

- [Saving and reading storage](#saving-and-reading-storage)
- [Make REST calls](#make-rest-calls)
- [Interact with the main DeskPRO User interface](#interact-with-the-main-deskpro-user-interface)
- [Interact with your application's UI Container](#interact-with-your-applications-ui-container)

## Saving and reading storage

Saving application-scoped storage:

```javascript
    const value = {
      aString: 'a string',
      aNumber: 5,
      aBoolean : false
    };

    const { dpapp } = this.props;    
    dpapp.storage.setAppStorage('app-settings', value).then(savedValue => console.log(savedValue));
```

Reading application-scoped storage:

```javascript
    const { dpapp } = this.props;    
    dpapp.storage.getAppStorage('app-settings').then(value => console.log(value));
```

Saving context-scoped storage: 

```javascript
    const cardId = 5;

    const { dpapp } = this.props;    
    dpapp.storage.setEntityStorage('linked-card', cardId).then(savedValue => console.log(savedValue));
```

Reading application-scoped storage:

```javascript
    const { dpapp } = this.props;    
    dpapp.storage.getEntityStorage('app-settings').then(value => console.log(value));
```    
    

## Make REST calls

Making rest calls to DeskPRO APIs (the apps use the v2 api endpoints):

```javascript
    const { dpapp } = this.props;    
    dpapp.restApi.fetch(
      'me', 
      { 
        method: "PUT",
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
      }
    ).then(response => console.log(response.body));
```

Making rest calls to an API which does not have CORS enabled:

```javascript
    const { dpapp } = this.props;    
    dpapp.restApi.fetchCORS(
      'https://login.mailchimp.com/oauth2/metadata', 
      { 
        method: "GET",
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
      }
    ).then(response => console.log(response.body));
```

## Interact with the main DeskPRO User interface

Show a notification message inside DeskPRO:

```javascript
    const { dpapp } = this.props;    
    dpapp.deskproWindow.showNotification('Your notification message here');
```

## Interact with your application's UI Container

Show or hide your application:

```javascript
    const { dpapp } = this.props;    
    dpapp.ui.hide();
```

```javascript
    const { dpapp } = this.props;    
    dpapp.ui.show();
```

Change your application layout to `collapsed` (only the menu bar is visible) and then restore it to `expanded`

```javascript
    const { dpapp } = this.props;    
    dpapp.ui.collapse();
```

```javascript
    const { dpapp } = this.props;    
    dpapp.ui.expand();
```

Display a badge count next your application icon:

```javascript
    const { dpapp } = this.props;    
    dpapp.ui.badgeCount = 5;
    dpapp.ui.showBadgeCount();
```

Display a loading screen while your application is loading some assets  or hide it:

```javascript
    const { dpapp } = this.props;
    // show the loading screen
    dpapp.ui.showLoading();
    
    // hide the loading screen
    dpap.ui.hideLoading();
```

Show or hide the menu options:

```javascript
    const { dpapp } = this.props;    
    dpapp.deskproWindow.showNotification('Your notification message here');
```