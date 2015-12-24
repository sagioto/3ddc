package com.vmware;

import com.vmware.connection.Connection;
import com.vmware.vm.VMClone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by mghuywaron on 12/23/2015.
 */
@Component
public class VMCloner extends VMClone {

    @Autowired
    public VMCloner(Connection connection) {
        super();
        setConnection(connection);
    }
}
