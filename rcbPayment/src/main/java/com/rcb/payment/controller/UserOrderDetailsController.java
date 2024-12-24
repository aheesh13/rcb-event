package com.rcb.payment.controller;




import com.rcb.payment.model.UserDetails;
import com.rcb.payment.service.UserOrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class UserOrderDetailsController {

    @Autowired
    private UserOrderDetailsService userOrderDetailsService;

    @PostMapping
    public ResponseEntity<String> handlePayment(@RequestBody UserOrderDto userOrderDetailRequest) {
        UserDetails savedUser = userOrderDetailsService.saveUserDetails(userOrderDetailRequest.getUserDetails());
        userOrderDetailRequest.getBookingDetails().setUserDetails(savedUser);
        userOrderDetailsService.saveBookingDetails(userOrderDetailRequest.getBookingDetails());

        return ResponseEntity.ok("Payment processed successfully");
    }
}
