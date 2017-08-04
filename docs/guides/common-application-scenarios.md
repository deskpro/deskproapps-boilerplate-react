# Common scenarios

In this section, you will see code examples for the most common operations:

- [Saving and reading state](#saving-and-reading-state)
- [Make REST calls](#make-rest-calls)
- [Interact with the main DeskPRO User interface](#interact-with-the-main-deskpro-user-interface)
- [Control your application's User Interface](#control-your-applications-user-interface)

## Saving and reading state

Saving application-scoped state:

```javascript
    const value = {
      aString: 'a string',
      aNumber: 5,
      aBoolean : false
    };

    const { dpapp } = this.props;    
    dpapp.state.setAppState('app-settings', value).then(savedValue => console.log(savedValue));
```

Reading application-scoped state:

```javascript
    const { dpapp } = this.props;    
    dpapp.state.getAppState('app-settings').then(value => console.log(value));
```

Saving context-scoped state: 

```javascript
    const cardId = 5;

    const { dpapp } = this.props;    
    dpapp.state.setEntityState('linked-card', cardId).then(savedValue => console.log(savedValue));
```

Reading application-scoped state:

```javascript
    const { dpapp } = this.props;    
    dpapp.state.getEntityState('app-settings').then(value => console.log(value));
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
    dpapp.restApi.fetchCors(
      'https://login.mailchimp.com/oauth2/metadata', 
      { 
        method: "GET",
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
      }
    ).then(response => console.log(response.body));
```

## Interact with the main DeskPRO User interface

## Control your application's User Interface