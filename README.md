
# Entrega Final Backend

Backend de Eccommerce realizado para entrega de Trabajo practico final de Curso Backend CoderHouse.
El mismo esta realizado en NodeJS


# ENDPOINTS

## Usuarios


#### Registrar usuario

```http
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |
| `name`      | `string` | **Required**. |
| `lastname`      | `string` | **Required**. |
| `phone`      | `string` | **Required**. |
| `image`      | `string` | **Required**. |


```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |

## Imagenes


#### Registrar usuario

```http
  POST /api/images
```


| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `miFoto`      | `file` | **Required**. |



## Productos

#### Obtener todos los productos, cualquier usuario

```http
  GET /api/products
```

#### Solicita un producto por ID, solo Admin

```http
  GET /api/products/:productID
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |


#### Agregar producto, solo Admin

```http
  POST /api/products
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `description`      | `string` | **Required**. |
| `price`      | `number` | **Required**. |
| `image`      | `string` | **Required**. |



#### Modificar producto por ID, solo Admin

```http
  POST /api/products/:productID
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `description`      | `string` | **Required**. |
| `price`      | `number` | **Required**. |
| `image`      | `string` | **Required**. |


#### Borrar producto por ID, solo Admin

```http
  DELETE /api/products/:productID
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |

## Carrito

#### Agregar productos al carrito 

```http
  POST /api/shoppingcartproducts
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productID`      | `ObjectId` | **Required**. |


#### Lista productos del carrito 

```http
  GET /api/shoppingcartproducts
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |



#### Elimina productos del carrito 

```http
  DELETE /api/shoppingcartproducts/:productID
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |


## Ordenes

#### Crear una orden nueva

```http
  POST /api/orders
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |

#### Obtener todas las ordenes(solo Admin)

```http
  GET /api/orders
```

| Authorization | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer` | **Required**.  |


## Author

- [@HernanBueno](https://www.github.com/HernanBueno)

