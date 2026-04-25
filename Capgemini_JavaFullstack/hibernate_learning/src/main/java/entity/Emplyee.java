package entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "Employee_Management")
public class Emplyee {

	@Id
	int id;
	@Column(name = "EmpName")
	String name;

	@Transient
	long phoneNumber;
	String address;

	@Override
	public int hashCode() {
		return Objects.hash(id, name, phoneNumber, address);
	}

	@Override
	public boolean equals(Object obj) {
		Emplyee e = (Emplyee) obj;
		return this.id == e.id;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Is: " + id + ", Name: " + name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
