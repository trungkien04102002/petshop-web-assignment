create schema if not exists petshop;
use petshop;
create table if not exists users
(
    userID int primary key auto_increment, 
    fullName varchar(70) not null default '',
    sex char(1),
    password varchar(200) not null default '',
    isAdmin bool not null default false,
    phoneNumber varchar(15),
    accumulatedScore int not null default 0    
);


create table if not exists pets
(
	petID int primary key auto_increment,
    name varchar(200) not null default 'Chó mèo chuột gà',
    unitPrice int not null default 0,
    breed varchar(100) not null default '',
    isBought bool not null default false,
    imageUrl varchar(200), 
    age int not null default 0,
    discountedPrice int default NULL
);

create table if not exists petFoods
(
	petFoodID int primary key auto_increment,
    name varchar(200) not null default 'Ice cream chilling chilling',
    unitPrice int not null default 0,	
    imageUrl varchar(200), 
    quantity int not null default 100,
    discountedPrice int default NULL
);
create table if not exists petProducts
(
	petProductID int primary key auto_increment,
    name varchar(200) not null default 'Pet bracet',
    unitPrice int not null default 0,	
    imageUrl varchar(200), 
    category varchar(100) not null default '',
    quantity int not null default 100,
    discountedPrice int default NULL
);
create table if not exists petServices
(
	petServiceID int primary key auto_increment,
    name varchar(200) not null default 'Hotel for me and youuu',
    unitPrice int not null default 0,	
    imageUrl varchar(200), 
    discountedPrice int default NULL
);

create table if not exists orders
(
	orderID int primary key auto_increment,
    userID int not null,
    isPaid bool not null default false,
    paymentMethod varchar(10) not null default 'direct', 
    createdDate datetime not null default current_timestamp,
    totalPrice int not null default 0,
    discountedTotalPrice int default null,
    isProcessed bool not null default false,
    foreign key(userID) references users(userID) on delete restrict
);

create table if not exists orderedPet 
(
	orderedPetID int primary key auto_increment,
    orderID int not null, 
    petID int not null,
    price int,
    foreign key(orderID) references orders(orderID) on delete restrict,
    foreign key(petID) references pets(petID) on delete restrict
);

create table if not exists orderedService
(
	orderedServiceID int primary key auto_increment,
    orderID int not null, 
    petServiceID int not null,
    quantity int not null default 1,
    price int,
    foreign key(orderID) references orders(orderID) on delete restrict,
    foreign key(petServiceID) references petServices(petServiceID) on delete restrict
);

create table if not exists orderedFood
(
	orderedFoodID int primary key auto_increment,
    orderID int not null, 
    petFoodID int not null,
    quantity int not null default 1,
    price int,
    foreign key(orderID) references orders(orderID) on delete restrict,
    foreign key(petFoodID) references petFoods(petFoodID) on delete restrict
);

create table if not exists orderedProduct
(
	orderedProductID int primary key auto_increment,
    orderID int not null, 
    petProductID int not null,
    quantity int not null default 1,
    price int,
    foreign key(orderID) references orders(orderID) on delete restrict,
    foreign key(petProductID) references petProducts(petProductID) on delete restrict
);

INSERT INTO pets(name, unitPrice, breed, isBought, imageUrl, age, discountedPrice)
VALUES 
('Golden đực siêu cưng',16000000, 'Chó Golden Retriever', false, 'https://matpetfamily.com/wp-content/uploads/2022/10/b2fe27874105865bdf14-600x792.jpg', 5, NULL),
('Golden dễ thương', 15000000, 'Chó Golden Retriever', false, 'https://matpetfamily.com/wp-content/uploads/2022/10/b2fe27874105865bdf14.jpg', 5, NULL),
('Corgi ú nu siêu xinh', 25000000, 'Chó Corgi', false, 'https://matpetfamily.com/wp-content/uploads/2019/12/75462468_1446520615496018_4012590135639015424_n201-600x800.jpg', 5, NULL),
('Corgi lông dài đực cute', 30000000, 'Chó Corgi', false, 'https://matpetfamily.com/wp-content/uploads/2022/10/8686e91cb9fb7ea527ea.jpg', 5, NULL),
('Husky đại ngáo ú nu',15000000, 'Chó Husky', false, 'https://matpetfamily.com/wp-content/uploads/2019/12/72835561_1437995923015154_7605397220103290880_n.jpg', 5, NULL),
('Corgi chân lùn', 22000000, 'Chó Corgi', false, 'https://matpetfamily.com/wp-content/uploads/2022/08/f7569eb750f695a8cce7.jpg', 4, NULL),
('Phốc sóc vàng bé xíu xiuu', 30000000, 'Chó Phốc Sóc', false, 'https://matpetfamily.com/wp-content/uploads/2022/09/d359787f1e21da7f8330.jpg', 4, NULL),
('Mèo Scottish Silver', 20000000, 'Mèo Tai Cụp', false, 'https://matpetfamily.com/wp-content/uploads/2020/02/78483435_1467114463436633_1463736498133139456_n-600x559.jpg', 3, NULL),
('Mèo tai cụp siêu đáng yêu', 20000000, 'Mèo Tai Cụp', false, 'https://matpetfamily.com/wp-content/uploads/2022/02/273437012_472239601205150_3512259468476545658_n-600x601.jpg', 2, NULL),
('Mèo Ragdoll yêu yêu', 25000000, 'Mèo Anh', false, 'https://matpetfamily.com/wp-content/uploads/2022/09/995035b80faecbf092bf-600x764.jpg', 3, NULL),
('Mèo chân ngắn, tai cụp', 30000000, 'Mèo chân ngắn', false, 'https://matpetfamily.com/wp-content/uploads/2020/12/129815790_1845524822262260_1393144393556835176_o-768x984.jpg', 3, NULL);

INSERT INTO petFoods(name, unitPrice, imageUrl, quantity, discountedPrice)
VALUES 
('Xương 7 dental vị sữa', 80000, 'https://matpetfamily.com/wp-content/uploads/2022/08/4ddf6049fbb23eec67a3.jpg', 100, NULL ),
('Sữa Predogen cho cún',195000, 'https://matpetfamily.com/wp-content/uploads/2021/03/kiotviet_b1941ca5a225716215bcf1dcfd10ce8c.jpg',100, NULL),
('Pate Snappy', 25000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_1c3ec5d3a4813b2e9a44d00688244ca5-300x300.jpeg',100,NULL),
('Sữa Precaten cho mèo', 195000, 'https://matpetfamily.com/wp-content/uploads/2022/08/1b69909a1fd6da8883c7.jpg', 100, NULL ),
('Pate Nekko cho mèo', 22000, 'https://matpetfamily.com/wp-content/uploads/2022/08/7eeb893e1ab7d8e981a6.jpg', 100, NULL ),
('Bánh thưởng cho chó', 60000,'https://matpetfamily.com/wp-content/uploads/2022/08/374e092a5ddd9883c1cc-300x300.jpg',100,NULL),
('Smart heart adult', 30000, 'https://matpetfamily.com/wp-content/uploads/2022/08/db81de96270ce552bc1d-300x300.jpg',100,NULL);

INSERT INTO petServices(name, unitPrice, imageUrl, discountedPrice)
VALUES 
('Vệ sinh tai, mắt',250000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_2999d4a81819cdbc0131256d32cccaeb-300x300.jpg',NULL),
('Cắt tỉa lông',300000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_2999d4a81819cdbc0131256d32cccaeb-300x300.jpg',NULL),
('Cắt móng',150000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_2999d4a81819cdbc0131256d32cccaeb-300x300.jpg',NULL),
('Tắm rửa',150000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_2999d4a81819cdbc0131256d32cccaeb-300x300.jpg',NULL);

INSERT INTO petProducts(name, unitPrice, imageUrl, category, quantity, discountedPrice)
VALUES 
('Áo AmBaby 4 chân',130000,'https://matpetfamily.com/wp-content/uploads/2020/07/kiotviet_e9850a2f574050228375c3e7b7a22803-300x300.jpeg', 'Phụ kiện thú cưng', 100, NULL),
('Dây vòng cổ chuông', 60000,'https://matpetfamily.com/wp-content/uploads/2021/05/kiotviet_a6359746e157b7d34d43f9d9ba408a0f.jpg','Phụ kiện thú cưng', 100, NULL ),
('Bộ học sinh',154000, 'https://matpetfamily.com/wp-content/uploads/2020/11/kiotviet_95024b13664f9527f00e176e1293816e-300x300.jpg', 'Phụ kiện thú cưng', 150, NULL),
('Bàn cào mèo', 77000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_baa814fdd5c918aa01646f08d64b89df-300x300.jpeg', 'Phụ kiện thú cưng', 120, NULL),
('Bát inox chân cún', 130000, 'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_3b8d0b2f5aa74c1eb0a9ac414daddc24-300x300.jpeg', 'Phụ kiện thú cưng', 112, NULL),
('Xịt vệ sinh răng miệng', 150000, 'https://cf.shopee.vn/file/7608bd6cad2170f08083144c4596677d', 'Đồ vệ sinh hàng ngày', 112, NULL),
('Xịt khử mùi', 100000, 'https://petshopsaigon.vn/wp-content/uploads/2021/06/xit-khu-mui-moi-truong-va-cho-meo-bioline-deodorizing-1.jpg', 'Đồ vệ sinh hàng ngày', 112, NULL),
('Dầu gội', 165000, 'https://www.vietpet.net/wp-content/uploads/2020/07/dau-goi-cho-cho-meo-professional-pet-products-tearless-pet-shampoo.jpg', 'Đồ vệ sinh hàng ngày', 112, NULL),
('Lồng hàng không', 512000, 'https://matpetfamily.com/wp-content/uploads/2020/07/kiotviet_9fb08bc272be5ed1a418b7297e04e645-270x270.png', 'Chuồng',10, NULL),
('Lồng D65', 1050000, 'https://matpetfamily.com/wp-content/uploads/2020/07/kiotviet_82baaecc17bfafbc44f836fc66a48361.jpg', 'Chuồng', 10, NULL);