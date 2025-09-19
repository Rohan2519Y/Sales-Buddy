CREATE DATABASE  IF NOT EXISTS `salebuddy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `salebuddy`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: salebuddy
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admins` (
  `emailid` varchar(100) NOT NULL,
  `mobileno` varchar(10) NOT NULL,
  `adminname` varchar(45) DEFAULT NULL,
  `picture` text,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emailid`,`mobileno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('rohankumar@gmail.com','9425308196','Rohan Kumar','1.jpg','12345'),('rohansingh@gmail.com','9340467517','Rohan Singh','2.jpg','12345');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ads` (
  `adid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `images` text,
  `description` text,
  `imgno` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`adid`),
  KEY `ad_fk_si_idx` (`serviceid`),
  KEY `ad_fk_bi_idx` (`brandid`),
  KEY `ad_fk_pi_idx` (`productid`),
  CONSTRAINT `ad_fk_bi` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`) ON DELETE CASCADE,
  CONSTRAINT `ad_fk_pi` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`) ON DELETE CASCADE,
  CONSTRAINT `ad_fk_si` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
INSERT INTO `ads` VALUES (2,7,35,14,'db1e7f78-ad74-4fff-943b-44b40ce3327d.webp','Watch Out For This','1'),(5,7,28,12,'307767d8-7024-4ace-bd1b-dd0623fd903e.webp','Hot Deals','2'),(6,7,30,15,'8728da25-c7b0-456b-8fbb-14e60de4359d.webp','Hot Deals','2');
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brands` (
  `brandid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandname` varchar(45) DEFAULT NULL,
  `brandlogo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`brandid`),
  KEY `service_id_idx` (`serviceid`),
  CONSTRAINT `service_id` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (23,7,'HP','b0126459-9bd4-4f1f-b6e6-4346201f0340.webp'),(24,7,'JBL','704bab9f-897f-4b93-9cdb-78381c3eec54.webp'),(25,7,'Lenovo','d3c12206-c044-4cba-a1dd-d50f56c82231.webp'),(26,7,'Oppo','53ca2b73-5ddf-4d15-8039-818b49367769.webp'),(27,7,'Philips','b0dd3909-9e3c-4a44-90ee-ded8f8a20fe1.webp'),(28,7,'Samsung','6beadfa0-fb25-492b-a02b-971303d7c779.webp'),(29,7,'Sony','0231f00e-1a83-4563-b08e-041e6bfa83dd.webp'),(30,7,'Vivo','710dd18b-92bc-4dd7-8180-49c91294e5de.webp'),(31,7,'Xiaomi','f21c9e08-e29e-467d-8589-67908d36b13f.png'),(32,7,'Haier','cf50ed49-56e3-406b-8440-50d7aa24d419.webp'),(33,7,'Apple','7618f489-4a8b-4ba2-a2eb-60d5a6e0d2e3.webp'),(34,7,'Dell','9c72d51a-e983-4664-b713-3b0f9f489394.webp'),(35,7,'One Plus','42412213-6052-4072-86db-1eb52e9e951c.png');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `morepicture`
--

DROP TABLE IF EXISTS `morepicture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `morepicture` (
  `pictureid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `productdetailsid` int(11) DEFAULT NULL,
  `picture` text,
  PRIMARY KEY (`pictureid`),
  KEY `service_id6_idx` (`serviceid`),
  KEY `brand_id5_idx` (`brandid`),
  KEY `product_id4_idx` (`productid`),
  KEY `productdetils_id_idx` (`productdetailsid`),
  CONSTRAINT `brand_id5` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`) ON DELETE CASCADE,
  CONSTRAINT `product_id4` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`) ON DELETE CASCADE,
  CONSTRAINT `productdetails_id` FOREIGN KEY (`productdetailsid`) REFERENCES `productdetails` (`productdetailsid`) ON DELETE CASCADE,
  CONSTRAINT `service_id6` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `morepicture`
--

LOCK TABLES `morepicture` WRITE;
/*!40000 ALTER TABLE `morepicture` DISABLE KEYS */;
INSERT INTO `morepicture` VALUES (10,7,33,13,13,'41c77343-e02b-4fb6-beb0-3433a2ec156b.webp,0090f83e-9b05-4bfd-8f90-74d3a56c10d8.webm,bd51405c-0b74-4973-b2a4-b481b4323cdd.webp,52f94275-c656-4ff9-a7a5-30d20d7fb26d.webp,9ad6d1c4-bb1f-4657-b793-bd1605a3e573.webp,3bc2efa2-f193-4fc7-9cfd-4a4eba2da6a3.webp,36adaecd-7976-4bc4-8e21-89e5c0bbb4f8.webp,5a82af82-42e8-4e9f-8895-ecff66bf5d96.webp,b64375e2-0e30-4041-abed-def46acfd842.webp,2c6943a8-1967-4b98-b1fb-290e41fff5ad.webp'),(11,7,28,12,18,'e3508a7e-8b91-4ee7-8d9e-d2cade6e95e5.webp,36d4010a-98fa-402e-a1dd-f2e2c9583180.webm,f53a38f9-fe9e-43a4-932e-8a2b2e1f2ba8.webp,e4b14272-b705-49e0-b45c-81e05a7fb58c.webp,dd3ebae7-0f9a-43ba-9b02-ef9f942300f9.webp,0fec645a-508d-461d-8141-91b4ff41ce3b.webp,51d81175-b8bf-443d-9954-b779ab6af260.webp,23b5ef2f-3c2e-4808-aad4-f87b72949498.webp,46981727-1564-4b79-9bb7-691341975003.webp,8c4e94c6-9f0d-46ff-984a-3d5ef69a705b.webp'),(12,7,28,12,19,'0ca4bddd-e20d-4336-9bdf-627cdd32438e.webp,00c97b65-018b-483c-acd8-1c07eb118627.webm,6f0cf2b4-5c0c-48e2-a43b-030c7e4c22a9.webp,49c96c6f-4d83-4c0b-8679-e26adf0e17e5.webp,5262e7c6-1e39-476d-b15a-99f291536ae5.webp,1a545b74-1d47-45ee-8e05-e232bf7467ce.webp,942329a2-c672-4103-8f02-3a120f3f8cee.webp,96455d3a-4eec-4ab9-9a61-4d49a4625128.webp,45786446-8766-466d-8613-038dbc6c073f.webp,72c94e02-1000-4c04-baf3-f4702fc4ac8c.webp'),(13,7,28,12,23,'94ee0b9d-ca9a-49c3-b806-ee8408815857.webp,24a698b0-1f11-4b0d-acd2-a735e77b71c7.webm,3e1c2a78-f24d-4538-9709-b4afdc080424.webp,75d09b6c-60d7-4a18-9aa8-f94285cfcce1.webp,8765543b-6dad-4f69-8e79-8938817c2bfa.webp,f644a7ca-1656-4ae3-9289-aa5d8c6d3988.webp,782beec3-a044-442d-b452-dbce10de2ac6.webp,b6520407-313e-4e16-8734-f4a30d29881c.webp,3b67cc6f-152c-4108-ae10-76d58b3e1637.webp,80c25ffe-2ffe-492e-9c86-70d6dc0c397a.webp'),(14,7,28,12,20,'62d06c22-88e0-43a3-83bc-20a62d406abf.webp,379ca758-4f29-436f-9a1b-ac987d6144bc.webm,842b832b-71ee-4ae5-9cd0-9f13b817ce60.webp,94c033c0-80ae-4a45-96dc-239c5ffec5b0.webp,cba6522e-cee4-44cd-bb37-f5ad3fc57eb7.webp,cfbc7436-34ce-4570-b355-51fdb6b4bee0.webp,48854f94-080b-417d-9f37-e20915a0dfc1.webp,5dc18e1f-6fe0-4980-be23-8484feecc491.webp,a37de1fb-87cb-40d9-b4ea-fc3cd0054f36.webp,de7b94f3-7c51-45c1-a531-f95331e84e62.webp'),(15,7,28,12,21,'f2cb1d3e-972f-4959-a6bb-d615f52b186d.webp,8195c9ed-3966-4b32-bd0f-ab9f682a7763.webm,6fa9f804-07c0-460d-9cf6-c0993caadb16.webp,64925e29-abbd-45f2-98ae-66d1ff649d91.webp,7aac5345-706d-4913-b456-b3a6225ff2b5.webp,418e8aa1-a34e-42a2-89e4-08e3296d6e29.webp,3748a059-d7f6-4adf-bffc-456fc7669584.webp,16e3578f-dfb6-4473-9c55-301bb732851b.webp,7695a5ed-a37c-4290-8dad-07959f85006d.webp,df5476bf-fb80-4006-a27f-a0cb3ee791c8.webp'),(16,7,33,13,14,'8c002648-b056-462e-81ee-2b5ca6375182.webp,ec2f184d-fe86-4cab-bc8f-56010df14379.webm,fe3ab24c-0959-4366-8711-042e8d16a40d.webp,3050ef17-056e-476b-a23e-8b30fa2a0800.webp,4d6bbfb8-3634-4838-bcba-ed707f954391.webp,27401b57-8527-4cb2-b51c-a2b027cf837c.webp,5e555597-202f-4d5f-aec7-ee0442d032c6.webp,555e6faf-8b0d-4b30-b8ed-54bbe6fb98d6.webp,45242c04-9c3c-47c7-af0e-391f73871238.webp,80347e5a-fd69-4691-96ab-909047f12619.webp'),(17,7,33,13,15,'41b1773c-e6d7-4f86-9505-40e73942f7f7.webp,f741c52e-14d5-4067-afab-3e93d75bb27a.webm,82af985c-cb3a-4643-b861-92a4541c1663.webp,a30fde2e-853c-4dd0-913c-79add83ea557.webp,f3c8c081-26e4-4e1f-a443-629fbfaf7bd6.webp,179311dd-37e3-4f15-8425-5223e3934e11.webp,9111a8fb-bb70-4a05-a345-9c922f9f99d7.webp,e111e9f1-a0e6-43a0-b892-d5d3f4ff5981.webp,62c70e83-150f-4634-8ab3-5fe68b372354.webp,709f0671-579f-4f7a-a99c-e4c89cd960a5.webp'),(18,7,33,13,17,'d0eee111-29f2-4658-9aea-57ff0760e2fe.webp,a05375d0-0158-4ad0-ae13-040566176520.webm,b5d1ca3f-e1fc-42c7-94f6-99b4e202d5ab.webp,234b6cbc-76c2-450b-a96e-7adb0692029a.webp,fcfbaad2-a6d7-4419-85a3-423044cf8b14.webp,d6ef71c0-3636-4682-be95-475fc27938ec.webp,d9981c34-05ac-472c-a3cc-e1cd315d80b8.webp,5707c69e-4abe-41dc-b37f-1ad5691d88bf.webp,08fb4cc0-d087-439b-9fdc-3f79dffe2d85.webp,f014a73f-28cb-4116-916a-036e45f4f8f0.webp'),(19,7,33,13,16,'f43dc63f-f127-4a84-a851-72e4597d1881.webp,6a9ef117-5c7c-4db7-8993-c336c9bc2e62.webm,6710b6a8-bcff-46c7-9833-234dc0d9a6c5.webp,0f8d8ac5-94ad-410d-9885-3abfe0868960.webp,f547543f-de9d-485f-8660-2f44ffa9e56d.webp,2bd33154-818e-4d36-8a77-c3b87a12ac02.webp,39e7b56f-e582-49a0-9304-98ee16c28036.webp,83667d65-2fdd-49de-9823-25168965a223.webp,0942f464-f938-4e56-aa95-ce0e9a77cf45.webp,a1b14fcc-1ece-4a6c-8de4-62072065cd81.webp'),(20,7,35,14,22,'6f91c43d-0a81-41a7-97c7-3a2314bfb821.webp,edc8d11f-2d6c-4586-8cc4-09cce3714c6f.webm,f84ce911-fb75-4e7c-89ab-2eb60dd89edf.webp,2c4a5354-1f3e-4fe6-ad6d-11398f82e591.webp,c07e0b5b-360d-4459-870d-d2754017c233.webp,e08104c2-598e-4e11-8b53-55d3cfdf34d9.webp,29b507be-53cc-4c33-828d-9fc57aea0de8.webp,62e0ce0c-6e3a-4005-ac13-8310ac982f4d.webp,2ef0f421-b15c-4c9a-9beb-7d45484df70d.webp,5a24becb-547a-4509-a625-791cd5549b25.webp'),(21,7,30,15,24,'ff0d5d54-526d-4813-b497-dcdc5fd7f316.webp,0e18b0d9-3230-4b6c-93d3-a46c19adf566.webm,f67b718c-3c54-45ab-9b93-f97a545a5e3c.webp,ce1aad72-85e4-4aed-9c09-391bd2e4ca9f.webp,737aa7ee-e9db-4d68-b266-a796789bdd3d.webp,186233c4-6d77-4d18-ad0c-b18a70d691f6.webp,68e845b3-115b-4f15-b41d-3375ab03844c.webp,153ad2db-8a2f-4a99-a920-d1e1b93f77aa.webp,e02c19af-9550-48a7-9123-cd9b9afa4139.webp,f6f3734d-8882-46e2-a4e8-cd9da782a684.webp');
/*!40000 ALTER TABLE `morepicture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderdetails` (
  `orderdetailsid` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` int(11) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `productdetailsid` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `offerprice` varchar(45) DEFAULT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `qty` varchar(45) DEFAULT NULL,
  `deliverystatus` varchar(45) DEFAULT NULL,
  `address` text,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `paymentstatus` varchar(45) DEFAULT NULL,
  `productname` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`orderdetailsid`),
  KEY `or_fk_od_idx` (`orderid`),
  CONSTRAINT `or_fk_od` FOREIGN KEY (`orderid`) REFERENCES `orders` (`orderid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
INSERT INTO `orderdetails` VALUES (9,18,'9340467517','19','118000','117000','117000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 12 GB 256 GB Titanium Gray'),(10,18,'9340467517','20','118000','117000','117000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 12 GB 512 GB Titanium Black'),(11,18,'9340467517','21','130000','129000','129000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 12 GB 512 GB Titanium Whitesilver'),(12,19,'1234','21','130000','129000','387000','3','Not-Delivered','gh srth srth 546','srth','srtyh','true','Samsung Galaxy S25 Ultra 12 GB 512 GB Titanium Whitesilver'),(13,20,'1234','18','118000','117000','117000','1','Not-Delivered','gh srth srth 546','srth','srtyh','true','Samsung Galaxy S25 Ultra 12 GB 1 TB Titanium Silverblue'),(14,26,'9340467517','23','170000','169000','169000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 16 GB 1 TB Titanium Gray'),(15,27,'9340467517','23','170000','169000','169000','1','Not-Delivered','43553 weffffff swfeeee 566666634','aergraeg','warg','true','Samsung Galaxy S25 Ultra 16 GB 1 TB Titanium Gray'),(16,29,'9340467517','13','70000','69000','69000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','iPhone 16 8 GB 256 GB Ultramarine'),(17,30,'9340467517','14','70000','69000','69000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','iPhone 16 8 GB 128 GB Teal'),(18,31,'9340467517','23','170000','169000','169000','1','Not-Delivered','LIG 1202 New Darpan Colony Govind Puri 474011','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 16 GB 1 TB Titanium Gray'),(19,32,'7974012979','23','170000','169000','169000','1','Not-Delivered','32 Bhadoriya mini mart Cresar 476111','Gwalior','Madhya Pradesh','true','Samsung Galaxy S25 Ultra 16 GB 1 TB Titanium Gray');
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `orderid` int(11) NOT NULL AUTO_INCREMENT,
  `orderdate` varchar(100) DEFAULT NULL,
  `ordertime` varchar(45) DEFAULT NULL,
  `totalamount` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `emailid` varchar(105) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `paymentmode` varchar(105) DEFAULT NULL,
  `transactionid` varchar(105) DEFAULT NULL,
  PRIMARY KEY (`orderid`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (18,'2025/8/1','20:41:17','363000','9340467517','rohankumar17645@gmail.com','true','Online','pay_R07BtoFMFr2zEb'),(19,'2025/8/2','11:15:2','387000','1234','rohankumar17645@gmail.com','true','Online','pay_R0M4oGYvEYFI86'),(20,'2025/8/2','11:25:46','117000','1234','rohankumar17645@gmail.com','true','Online','pay_R0MG9LHcApAevl'),(21,'2025/8/3','17:14:54','0',NULL,NULL,'true','Online','pay_R0qk51cXrvmvUn'),(22,'2025/8/3','17:18:13','0',NULL,NULL,'true','Online','pay_R0qnahZujIjnj6'),(23,'2025/8/3','17:20:31','0',NULL,NULL,'true','Online','pay_R0qq1YxMKyjm75'),(24,'2025/8/3','17:27:40','0',NULL,NULL,'true','Online','pay_R0qxaOJAxRAFjF'),(25,'2025/8/3','17:53:58','0','9340467517','rohankumar17645@gmail.com','true','Online','pay_R0rPLPVDn7eL9q'),(26,'2025/8/4','17:55:7','169000','9340467517','rohankumar17645@gmail.com','true','Online','pay_R0rQZAHDxfthZI'),(27,'2025/8/4','18:40:12','169000','9340467517','rohankumar17645@gmail.com','true','Online','pay_R0sCCJdAbnxhoM'),(28,'2025/8/5','14:54:51','0','9340467517','rohankumar17645@gmail.com','true','Online','pay_R1bQMTHXBUVCoG'),(29,'2025/8/5','15:0:30','69000','9340467517','rohankumar17645@gmail.com','true','Online','pay_R1bWKw2yPOQ0fF'),(30,'2025/8/13','14:24:16','69000','9340467517','rohankumar17645@gmail.com','true','Online','pay_R4lB4wn7FOGdBV'),(31,'2025/9/11','10:21:19','169000','9340467517','rohankumar17645@gmail.com','true','Online','pay_RGAWtoSvOTLK3K'),(32,'2025/9/18','18:35:58','169000','7974012979','varsha.v.tomar@gmail.com','true','Online','pay_RJ4hF1kiU6F75R');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcolors`
--

DROP TABLE IF EXISTS `productcolors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productcolors` (
  `productcolorid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `productcolor` varchar(50) DEFAULT NULL,
  `productcolorname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productcolorid`),
  KEY `serviceid` (`serviceid`),
  KEY `brandid` (`brandid`),
  KEY `productid` (`productid`),
  CONSTRAINT `productcolors_ibfk_1` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`),
  CONSTRAINT `productcolors_ibfk_2` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`),
  CONSTRAINT `productcolors_ibfk_3` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcolors`
--

LOCK TABLES `productcolors` WRITE;
/*!40000 ALTER TABLE `productcolors` DISABLE KEYS */;
INSERT INTO `productcolors` VALUES (12,7,33,13,'#6467e6','Ultramarine'),(13,7,33,13,'#85adac','Teal'),(14,7,33,13,'#ee94ca','Pink'),(15,7,33,13,'#e7e7e7','White'),(16,7,33,13,'#202020','Black'),(17,7,28,12,'#8d9fbb','Titanium Silverblue'),(18,7,28,12,'#b3ac9e','Titanium Gray'),(19,7,28,12,'#4a494d','Titanium Black'),(20,7,28,12,'#d7d7d5','Titanium Whitesilver'),(21,7,35,14,'#f1e3e7','Pink'),(22,7,30,15,'#D3A587','Royal Bronze');
/*!40000 ALTER TABLE `productcolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productdetails`
--

DROP TABLE IF EXISTS `productdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productdetails` (
  `productdetailsid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `productcolorid` int(11) DEFAULT NULL,
  `productvarientid` int(11) DEFAULT NULL,
  `imei` varchar(45) DEFAULT NULL,
  `productstatus` varchar(45) DEFAULT NULL,
  `warrenty` varchar(45) DEFAULT NULL,
  `ratings` varchar(45) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `offerprice` decimal(10,2) DEFAULT NULL,
  `membershipprice` decimal(10,2) DEFAULT NULL,
  `productcondition` varchar(45) DEFAULT NULL,
  `description` text,
  `stock` int(11) DEFAULT NULL,
  `picture` text,
  `video` text,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productdetailsid`),
  KEY `service_id3_idx` (`serviceid`),
  KEY `brand_id2_idx` (`brandid`),
  KEY `product_id_idx` (`productid`),
  KEY `productcolor_id_idx` (`productcolorid`),
  KEY `productvarient_id_idx` (`productvarientid`),
  CONSTRAINT `brand_id4` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`) ON DELETE CASCADE,
  CONSTRAINT `product_id3` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`) ON DELETE CASCADE,
  CONSTRAINT `productcolor_id` FOREIGN KEY (`productcolorid`) REFERENCES `productcolors` (`productcolorid`) ON DELETE CASCADE,
  CONSTRAINT `productvarient_id` FOREIGN KEY (`productvarientid`) REFERENCES `productvarients` (`productvarientid`) ON DELETE CASCADE,
  CONSTRAINT `service_id5` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetails`
--

LOCK TABLES `productdetails` WRITE;
/*!40000 ALTER TABLE `productdetails` DISABLE KEYS */;
INSERT INTO `productdetails` VALUES (13,7,33,13,12,14,'5464777665','New','10 Months','5',70000.00,69000.00,68000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.1 inches (15.54 cm), Super Retina XDR OLED Display</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 128GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Apple A18 Chip, Hexa Core</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 48 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 25W MagSafe Wireless Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: IP68 Splash, Water &amp; Dust Resistant, Built for Apple Intelligence, Camera Control</li></ol>',7,'db89f809-a445-4467-9cd9-c27fdc9feac1.webp','8a3cb001-4e7a-4d6d-a601-a53c5e454499.webm','Hot Deals'),(14,7,33,13,13,13,'546123578','New','10 Months','5',70000.00,69000.00,68000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.1 inches (15.54 cm), Super Retina XDR OLED Display</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 128GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Apple A18 Chip, Hexa Core</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 48 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 25W MagSafe Wireless Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: IP68 Splash, Water &amp; Dust Resistant, Built for Apple Intelligence, Camera Control</li></ol><p><br></p>',5,'96d47b44-7bfd-4948-9d8b-5454914916ad.webp','26b0a650-d2b6-490b-9404-a12b65541797.webm','Hot Deals'),(15,7,33,13,14,15,'8906123578','New','10 Months','5',70000.00,69000.00,68000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.1 inches (15.54 cm), Super Retina XDR OLED Display</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 128GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Apple A18 Chip, Hexa Core</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 48 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 25W MagSafe Wireless Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: IP68 Splash, Water &amp; Dust Resistant, Built for Apple Intelligence, Camera Control</li></ol>',9,'ad8b2836-2f1b-4210-9147-91b35baf6303.webp','1c1d921f-324c-4425-b316-927e389c299d.webm','Latest Launches'),(16,7,33,13,15,13,'8909090578','New','10 Months','5',70000.00,69000.00,68000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.1 inches (15.54 cm), Super Retina XDR OLED Display</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 128GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Apple A18 Chip, Hexa Core</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 48 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 25W MagSafe Wireless Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: IP68 Splash, Water &amp; Dust Resistant, Built for Apple Intelligence, Camera Control</li></ol><p><br></p>',5,'bd34ab7f-f969-4439-bf55-14ab029636e6.webp','c23fefd0-fea3-4481-90e8-5b9aedb95ddb.webm','Latest Launches'),(17,7,33,13,16,13,'8234487350578','New','10 Months','5',70000.00,69000.00,68000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.1 inches (15.54 cm), Super Retina XDR OLED Display</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 128GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Apple A18 Chip, Hexa Core</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 48 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 25W MagSafe Wireless Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: IP68 Splash, Water &amp; Dust Resistant, Built for Apple Intelligence, Camera Control</li></ol><p><br></p>',4,'5bf252d4-23cb-4d26-bec7-5c7cff6165cb.webp','5b99c0d1-13bd-4a88-b475-a2f08d164cc0.webm','Hot Deals'),(18,7,28,12,17,12,'856855696966','Refurbished','10 Months','5',118000.00,117000.00,116000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 256GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.47 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5000 mAh with USB Type-C Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li></ol>',7,'e6c6d199-56d9-4f18-acf7-3027fbfd11ec.webp','573481c4-ef2b-4502-9270-8bfa0cbd204f.webm','Hot Deals'),(19,7,28,12,18,10,'8508367966','Refurbished','10 Months','5',118000.00,117000.00,116000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 256GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.47 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5000 mAh with USB Type-C Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li></ol><p><br></p>',4,'874afe7e-43ee-4a9b-8303-3d2190171205.webp','e516c60a-9b57-4352-bc88-034c9301d6ce.webm','Hot Deals'),(20,7,28,12,19,11,'7896367966','Refurbished','10 Months','5',118000.00,117000.00,116000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 512GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.47 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5000 mAh with USB Type-C Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li></ol><p><br></p>',3,'75f31199-c637-4979-9522-eb757a325da5.webp','9b2de171-f1c8-48b1-a623-c7b955031ce1.webm','Hot Deals'),(21,7,28,12,20,11,'787962166','Refurbished','10 Months','5',130000.00,129000.00,128000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 512GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.47 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5000 mAh with USB Type-C Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li></ol><p><br></p>',9,'d1fb671f-55e9-4a67-b29a-10ef27d01ed5.webp','f5dbdb02-96b8-460e-9141-520e4763c591.webm','Hot Deals'),(22,7,35,14,21,16,'6772342345','New','10 Months','5',55000.00,54000.00,53000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.32 inches (16.05 cm), ProXDR Display with LTPO, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 256GB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.32 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 50 MP + 50 MP Dual Rear &amp; 32 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5850 mAh with 80W SUPERVOOC Charge</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Aqua Touch 2.0, Google Gemini, AI VoiceScribe</li></ol><p><br></p>',5,'7342d9ee-b8fd-4ae8-af9c-5b1523b3aa11.webp','145f0dcf-d9fb-4db1-98ff-5bb519edc5b7.webm','Latest Launches'),(23,7,28,12,18,18,'654444','New','10 Months','5',170000.00,169000.00,168000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 12GB RAM, 1TB ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: Qualcomm Snapdragon 8 Elite, Octa Core, 4.47 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear &amp; 12 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5000 mAh with USB Type-C Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li></ol><p><br></p>',8,'f93a9193-3f08-4326-bc0f-03a3d6ed227a.webp','fdb6bd5c-bac5-41ee-a042-2c6f73552487.webm','Hot Deals'),(24,7,30,15,22,20,'5637','New','10 Months','5',42000.00,36000.00,34000.00,'Superb','<p>Key Features</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Display: 6.77 inches (17.20 cm), AMOLED, 120 Hz Refresh Rate</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Memory: 8GB RAM, 128 ROM</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Processor: MediaTek Dimensity 7300, Octa Core, 2.5 GHz</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Camera: 50 MP + 8 MP Dual Rear Camera &amp; 50 MP Front Camera</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Battery: 5500 mAh with 80W Fast Charging</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>USP: AI Portrait Suite, Ultra Slim, IP64 Dust &amp; Water Resistant</li></ol>',7,'3fbcbe46-ba64-4d8e-97bf-7f78a6c3fa94.webp','d29c5de6-eab6-414f-b303-eaed8e7a1f80.webm','Latest Launches');
/*!40000 ALTER TABLE `productdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productname` varchar(45) DEFAULT NULL,
  `productdescription` text,
  `productpicture` text,
  PRIMARY KEY (`productid`),
  KEY `service_id_idx` (`serviceid`),
  KEY `brand_id_idx` (`brandid`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`) ON DELETE CASCADE,
  CONSTRAINT `service2_id` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (12,7,28,'Samsung Galaxy S25 Ultra','Samsung Galaxy S25 Ultra','da3cb99f-6380-47aa-b248-04a8733c31f5.png'),(13,7,33,'iPhone 16','iPhone 16','37d10a51-8e21-493b-b336-24299cd16c99.jpg'),(14,7,35,'OnePlus 13s 5G','OnePlus 13s 5G','c0691ada-e6ed-47da-90e4-4729aa2cf8be.webp'),(15,7,30,'Vivo V40E','Vivo V40E','4c7bf8e6-bc75-4b73-80e0-deb51a74eeaf.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productvarients`
--

DROP TABLE IF EXISTS `productvarients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productvarients` (
  `productvarientid` int(11) NOT NULL AUTO_INCREMENT,
  `serviceid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `productram` varchar(50) DEFAULT NULL,
  `productstorage` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`productvarientid`),
  KEY `serviceid` (`serviceid`),
  KEY `brandid` (`brandid`),
  KEY `productid` (`productid`),
  CONSTRAINT `productvarients_ibfk_1` FOREIGN KEY (`serviceid`) REFERENCES `services` (`serviceid`),
  CONSTRAINT `productvarients_ibfk_2` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`),
  CONSTRAINT `productvarients_ibfk_3` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productvarients`
--

LOCK TABLES `productvarients` WRITE;
/*!40000 ALTER TABLE `productvarients` DISABLE KEYS */;
INSERT INTO `productvarients` VALUES (10,7,28,12,'12 GB','256 GB'),(11,7,28,12,'12 GB','512 GB'),(12,7,28,12,'12 GB','1 TB'),(13,7,33,13,'8 GB','128 GB'),(14,7,33,13,'8 GB','256 GB'),(15,7,33,13,'8 GB','512 GB'),(16,7,35,14,'12 GB','256 GB'),(17,7,33,13,'12 GB','256 GB'),(18,7,28,12,'16 GB','1 TB'),(19,7,28,12,'16 GB','512 GB'),(20,7,30,15,'8 GB','256 GB');
/*!40000 ALTER TABLE `productvarients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `services` (
  `serviceid` int(11) NOT NULL AUTO_INCREMENT,
  `servicetype` varchar(45) DEFAULT NULL,
  `servicename` varchar(100) DEFAULT NULL,
  `icon` text,
  `servicestatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`serviceid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (7,'Buy','Mobile','e2f7c64f-cdb2-43f9-a3b9-3576e011474d.png','Continue'),(8,'Sell','Mobile','182f37c8-344e-495f-92ee-90fce8ab3000.png','Continue'),(9,'Buy','Laptop','cdafe622-025b-4f6e-9eed-e3bdcfe8da90.png','Continue'),(10,'Sell','Laptop','c3ffb33c-3ce5-4296-aac6-57009151c633.png','Continue');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraddress`
--

DROP TABLE IF EXISTS `useraddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `useraddress` (
  `addressid` int(11) NOT NULL AUTO_INCREMENT,
  `emailid` varchar(100) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `address` text,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `landmark` varchar(45) DEFAULT NULL,
  `username` varchar(105) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `area` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`addressid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraddress`
--

LOCK TABLES `useraddress` WRITE;
/*!40000 ALTER TABLE `useraddress` DISABLE KEYS */;
INSERT INTO `useraddress` VALUES (17,'rohankumar17645@gmail.com','','LIG 1202','Madhya Pradesh','Gwalior','474011','New Darpan Colony','Mr Rohan  Kumar','Male','Rohan House','Thatipur'),(18,'akashbhagel@gmail.com','12345678','LIG 1202','Madhya Pradesh','Gwalior','474011','New Darpan Colony','Mr Aakash  Bhagel','Male','Rohan House','Govind Puri'),(20,'dsjbche','12345','234','234234','234','234','234','Ms sacccccccc  ejhcb','I’d rather not say','dsf','234'),(21,'rohankumar17645@gmail.com','9340467517','LIG 1202','Madhya Pradesh','Gwalior','474011','New Darpan Colony','Mr Rohan  Kumar','Male','Rohan House','Govind Puri'),(22,'rohankumar17645@gmail.com','9340467517','kusrhgiuherg','Madhya Pradesh','Gwalior','712368712','ejrhg','Mr Rohan  Kumar','Male','Thatipur','swfeeee'),(23,'varsha.v.tomar@gmail.com','7974012979','32','Madhya Pradesh','Gwalior','476111','Bhadoriya mini mart','Mrs Varsha  Tomar','Female','Balaji puram','Cresar'),(24,'varsha.v.tomar@gmail.com','7974012979','32','Madhya Pradesh','Gwalior','476111','Bhadoriya mini mart','Mrs Varsha  Tomar','Female','Balaji puram','Cresar');
/*!40000 ALTER TABLE `useraddress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `mobileno` varchar(13) NOT NULL,
  `emailid` varchar(105) DEFAULT NULL,
  PRIMARY KEY (`mobileno`),
  UNIQUE KEY `emailid_UNIQUE` (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1234',NULL),('12345',NULL),('123456',NULL),('12345678',NULL),('7974012979',NULL),('9340467517',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'salebuddy'
--

--
-- Dumping routines for database 'salebuddy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-19 20:32:25
