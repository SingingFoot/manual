---
title: Diagramming in Lucidchart
---

## UML class diagram for an online shopping cart

<img src="/blogpics/umldiagram.jpeg" width="650" style="margin: 10px 10px 10px 0px"/>

## Show classes and relationships of the system

The **User** class has attributes for **user ID**, **password**, **login status**, and **register date**.
There are the different return types on the right, and on the left, the visibility, which are set to private (with "-" sign).

The values returned by these attributes would specifically describe an instance of the **User** class.
Down below we have a public method of **verify login** (`verifyLogin()`), returning a boolean. 

Methods are behaviors of a class. So if a user is to log in to his/her user account, there’s a function in place that verifies the login credentials.

The arrow from **Customer** to **User** class tells us that **Customer** is a child of **User**. So Customer inherits all the attributes and methods of the **User** class. And same thing for the **Administrator** class.

Both of these classes inherit from **User** class, but also have their own specific attributes and methods. Like **Administrator** class can update catalog, but **Customer** class can’t.

Stemming from **Customer**, there are several lines with the closed-in diamond sign. So, these are composition relationships which means that the parts cannot exist without the whole. If an instance of the **Customer** class, if that customer’s account was destroyed, his **Shopping Cart** would be destroyed and his **Order**s would be lost. **Shopping Cart** and **Order** classes can’t exist outside of the **Customer** class.

The same applies for **Shipping Info** and **Order Details**. If there’s no **Order**, there’s not going to be any **Order Details** or **Shipping Info**.

## Show multiplicity

A **Customer** can have zero or many orders. A customer account can be created for an online store but the customer will never buy anything. A frequent customer can place several different orders. And then on the flip side, an **Order** can belong to only one customer. It’d be pretty confusing if a specific **Order** with a unique **order ID** was duplicated across several different customers.
That can be fixed with one-to-one relationship. Each **Order** has one and only one **Order Details** class. And **Order Details** belongs to one and only one **Order**.

