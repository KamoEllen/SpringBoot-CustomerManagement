# Customer Management System Documentation
## Spring Boot + MySQL + React → AWS (EC2, RDS, S3) Complete Deployment Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture Documentation](#architecture-documentation)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [API Documentation](#api-documentation)
7. [Database Schema](#database-schema)
8. [AWS Deployment Guide](#aws-deployment-guide)
9. [Development Workflow](#development-workflow)
10. [Testing](#testing)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Description
A full-stack web application for managing customer data with CRUD (Create, Read, Update, Delete) operations. The system provides a clean, responsive interface for customer management with a robust backend API. **This project demonstrates complete deployment from development to production on AWS cloud infrastructure.**

### Repository
🔗 **GitHub**: [https://github.com/KamoEllen/SpringBoot-CustomerManagement](https://github.com/KamoEllen/SpringBoot-CustomerManagement)

### Live Demo
- **Frontend**: Deployed on AWS S3 Static Website Hosting
- **Backend**: Deployed on AWS EC2 instance
- **Database**: MySQL on AWS RDS

### Key Features
- Add new customers
- View all customers in a responsive table
- Update existing customer information
- Delete customers
- Responsive design with modern UI/UX
- RESTful API architecture
- Cloud deployment ready

### System Requirements
- Java 11 or higher
- Node.js 14 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher
- Modern web browser

---

## Architecture Documentation

### System Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                        React Frontend                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Components    │  │    Services     │  │    Routing      │  │
│  │                 │  │                 │  │                 │  │
│  │ • HeaderComp    │  │ • CustomerServ  │  │ • React Router  │  │
│  │ • ListComp      │  │ • Axios HTTP    │  │ • Route Guards  │  │
│  │ • AddComp       │  │ • API Client    │  │ • Navigation    │  │
│  │ • FooterComp    │  │                 │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                │                                │
│                                ▼                                │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                State Management                            │  │
│  │ • React Hooks (useState, useEffect)                       │  │
│  │ • Component State                                         │  │
│  │ • Props Data Flow                                         │  │
│  └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
                        HTTP REST API Calls
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Spring Boot Backend                       │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Controller    │  │    Service      │  │   Repository    │  │
│  │                 │  │                 │  │                 │  │
│  │ • @RestController│  │ • Business      │  │ • JpaRepository │  │
│  │ • @GetMapping   │  │   Logic         │  │ • Data Access   │  │
│  │ • @PostMapping  │  │ • Validation    │  │ • CRUD Ops      │  │
│  │ • @PutMapping   │  │ • Processing    │  │                 │  │
│  │ • @DeleteMapping│  │                 │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                │                                │
│                                ▼                                │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                    Model Layer                             │  │
│  │ • @Entity Customer                                         │  │
│  │ • JPA Annotations                                          │  │
│  │ • Data Validation                                          │  │
│  └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
                        JPA/Hibernate ORM
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        MySQL Database                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                 Customer Table                             │  │
│  │ • id (Primary Key, Auto Increment)                        │  │
│  │ • firstName (VARCHAR)                                     │  │
│  │ • lastName (VARCHAR)                                      │  │
│  │ • email (VARCHAR, Unique)                                 │  │
│  │ • Indexes and Constraints                                 │  │
│  └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

#### Frontend (React.js)
- **Components**: Modular React components for UI
- **Services**: API communication layer
- **Routing**: React Router for navigation
- **Styling**: Bootstrap + Custom CSS with modern design

#### Backend (Spring Boot)
- **Controller Layer**: REST API endpoints
- **Service Layer**: Business logic implementation
- **Repository Layer**: Data access abstraction
- **Model Layer**: Entity definitions

#### Database (MySQL)
- **Tables**: Customer data storage
- **Relationships**: Simple entity structure
- **Constraints**: Primary keys, data validation

### Design Patterns Used
- **MVC (Model-View-Controller)**: Overall architecture
- **Repository Pattern**: Data access layer
- **Service Layer Pattern**: Business logic separation
- **RESTful API Design**: Stateless communication

---

## Technology Stack

### Backend Technologies
- **Java 11+**: Programming language
- **Spring Boot 2.x**: Application framework
- **Spring Data JPA**: Data persistence
- **Spring Web**: REST API development
- **MySQL**: Database
- **Maven**: Build tool and dependency management

### Frontend Technologies
- **React.js 18**: UI framework
- **React Router**: Navigation
- **Axios**: HTTP client
- **Bootstrap 5**: CSS framework
- **Custom CSS**: Enhanced styling

### Development Tools
- **IDE**: Visual Studio Code
- **Version Control**: Git & GitHub
- **API Testing**: Postman / Thunder Client
- **Database Management**: MySQL Workbench
- **Cloud Platform**: AWS (EC2, RDS, S3)

---

## Project Structure

### Backend Structure
```
customermanagementbackend/
├── src/
│   ├── main/
│   │   ├── java/com/customermanagementbackend/
│   │   │   ├── CustomermanagementbackendApplication.java
│   │   │   ├── controller/
│   │   │   │   └── CustomerController.java
│   │   │   ├── model/
│   │   │   │   └── Customer.java
│   │   │   ├── repository/
│   │   │   │   └── CustomerRepository.java
│   │   │   └── service/
│   │   │       ├── CustomerService.java
│   │   │       └── CustomerServiceInterface.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
└── README.md
```

### Frontend Structure
```
customermanagement-frontend/
├── public/
├── src/
│   ├── component/
│   │   ├── AddCustomerComponent.js
│   │   ├── FooterComponent.js
│   │   ├── HeaderComponent.js
│   │   └── ListCustomerComponent.js
│   ├── service/
│   │   └── CustomerService.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## Setup and Installation

### Prerequisites
1. Install Java 11 or higher
2. Install Node.js 14 or higher
3. Install MySQL 8.0 or higher (for local development)
4. Install Maven 3.6 or higher
5. AWS Account (for cloud deployment)
6. Git installed locally

### Local Development Setup

#### Clone the Repository
```bash
git clone https://github.com/KamoEllen/SpringBoot-CustomerManagement.git
cd SpringBoot-CustomerManagement
```

2. **Configure database**
   ```properties
   # application.properties
   spring.datasource.url=jdbc:mysql://localhost:3306/customerdb
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Build and run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. **Navigate to frontend directory**
   ```bash
   cd customermanagement-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

### Database Setup
1. **Create database**
   ```sql
   CREATE DATABASE customerdb;
   USE customerdb;
   ```

2. **Table creation** (Auto-generated by Hibernate)
   ```sql
   CREATE TABLE customer (
       id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(255),
       last_name VARCHAR(255),
       email VARCHAR(255)
   );
   ```

---

## API Documentation

### Base URL
```
http://localhost:8080/customer
```

### Endpoints

#### 1. Get All Customers
- **Method**: GET
- **URL**: `/customer`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  ]
  ```

#### 2. Get Customer by ID
- **Method**: GET
- **URL**: `/customer/{id}`
- **Response**:
  ```json
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
  ```

#### 3. Create Customer
- **Method**: POST
- **URL**: `/customer`
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
  ```

#### 4. Update Customer
- **Method**: PUT
- **URL**: `/customer/{id}`
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@example.com"
  }
  ```

#### 5. Delete Customer
- **Method**: DELETE
- **URL**: `/customer/{id}`
- **Response**: 200 OK

---

## Database Schema

### Customer Entity
```sql
CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
```

### Entity Relationships
- Currently single entity system
- Future enhancements could include:
  - Customer addresses
  - Customer orders
  - Customer categories

---

## Deployment Guide

### AWS Cloud Deployment

#### Step 1: RDS Database Setup 
1. **Create RDS MySQL Instance**
   - Navigate to AWS RDS Console
   - Create new MySQL database
   - Configure security groups
   - Note down endpoint and credentials

2. **Connect to MySQL Workbench**
   - Open MySQL Workbench
   - Create new connection using RDS endpoint
   - Test connection

#### Step 2: Backend Deployment 
1. **Update application.properties**
   ```properties
   spring.datasource.url=jdbc:mysql://your-rds-endpoint:3306/customerdb
   spring.datasource.username=admin
   spring.datasource.password=your-password
   ```

2. **Create EC2 Instance **
   - Launch EC2 instance 
   - Configure security groups (port 8080, 22)
   - Download key pair

3. **Connect to EC2**
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```

4. **Deploy Backend **
   ```bash
   # Install Java
   sudo yum update -y
   sudo yum install java-11-openjdk -y
   
   # Upload and run JAR
   scp -i your-key.pem target/app.jar ec2-user@your-ec2-ip:~
   java -jar app.jar
   ```

#### Step 3: Frontend Deployment 
1. **Update API URL**
   ```javascript
   // CustomerService.js
   const BASE_URL = "http://your-ec2-ip:8080/customer";
   ```

2. **Build and Deploy to S3**
   ```bash
   npm run build
   aws s3 cp build/ s3://your-bucket-name --recursive
   ```

3. **Configure S3 for Static Website Hosting**
   - Enable static website hosting
   - Set index.html as index document
   - Configure bucket policy for public access

#### Step 4: Testing 
- Test complete flow from S3 URL
- Verify all CRUD operations work
- Check data persistence in RDS

---

## Development Workflow

### Git Workflow
```bash
# Feature development
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature

# Create pull request
# After review, merge to main
```

### Code Standards
- Follow Java naming conventions
- Use meaningful variable names
- Add comments for complex logic
- Maintain consistent indentation

### Testing Strategy
- Unit tests for service layer
- Integration tests for API endpoints
- Manual testing for UI components

---

## Testing

### Backend Testing
```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=CustomerServiceTest
```

### Frontend Testing
```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

---

## Troubleshooting

### Common Issues

#### Database Connection Issues
```
Error: Access denied for user 'root'@'localhost'
Solution: Check username/password in application.properties
```

#### Port Already in Use
```
Error: Port 8080 is already in use
Solution: 
- Kill process: lsof -ti:8080 | xargs kill -9
- Or change port in application.properties
```

#### Frontend Build Issues
```
Error: Module not found
Solution: Delete node_modules and run npm install
```

### Performance Optimization
- Use pagination for large datasets
- Implement caching for frequently accessed data
- Optimize database queries
- Compress frontend assets

### Security Considerations
- Input validation on all endpoints
- SQL injection prevention (JPA handles this)
- HTTPS in production
- Environment-specific configurations

---

## Contributing

### Development Setup
1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

### Code Review Process
- All changes require review
- Automated tests must pass
- Documentation must be updated


