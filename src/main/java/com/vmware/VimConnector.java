package com.vmware;

import com.vmware.vim25.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.xml.ws.BindingProvider;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by mghuywaron on 12/23/2015.
 */
@RestController
public class VimConnector {


    public VimConnector() {

    }

//    @PostConstruct
//    public void connectToVCenter() {
//        VimService vimService = new VimService();
//        VimPortType vimPort = vimService.getVimPort();
//
//        Map<String, Object> ctxt = ((BindingProvider) vimPort).getRequestContext();
//        ctxt.put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, url);
//        ctxt.put(BindingProvider.SESSION_MAINTAIN_PROPERTY, true);
//
//        ManagedObjectReference serviceInstance = new ManagedObjectReference();
//        serviceInstance.setType("ServiceInstance");
//        serviceInstance.setValue("ServiceInstance");
//
//        try {
//            // Disable all SSL trust security
//            DisableSecurity.trustEveryone();
//            ServiceContent serviceContent = vimPort.retrieveServiceContent(serviceInstance);
//            vimPort.login(serviceContent.getSessionManager(), user, password, null);
//
//            collectProperties(vimPort,serviceContent);
//
//            // print out the product name, server type, and product version
//            System.out.println(serviceContent.getAbout().getFullName());
//            System.out.println("Server type is " + serviceContent.getAbout().getApiType());
//            System.out.println("API version is " + serviceContent.getAbout().getVersion());
//
//            vimPort.logout(serviceContent.getSessionManager());
//
//        } catch (RuntimeFaultFaultMsg | InvalidLocaleFaultMsg | InvalidLoginFaultMsg | KeyManagementException | NoSuchAlgorithmException | InvalidPropertyFaultMsg e) {
//            e.printStackTrace();
//        }
//
//    }
//
//    private static void collectProperties(VimPortType vimPort, ServiceContent serviceContent)
//            throws InvalidPropertyFaultMsg, RuntimeFaultFaultMsg {
//
//        // Get reference to the PropertyCollector
//        ManagedObjectReference propertyCollector = serviceContent.getPropertyCollector();
//
//        // Create a new ManagedObjectReference to get
//        ManagedObjectReference rootFolder = serviceContent.getRootFolder();
//
//
//        // Create an ObjectSpec to define the beginning of the traversal
//        // We are traversing the root folder, so set the obj property to it
//        ObjectSpec objectSpec = new ObjectSpec();
//        objectSpec.setObj(rootFolder);
//
//        // Create a PropertySpec to specify the properties we want.
//        // Each PropertySpec specifies the type of the object we are using, and a list
//        // of property names to collect.  In this case the type is the type of the
//        // root folder, and the property is "name".  Note that the pathSet list is
//        // automatically initialized by the getPathSet method
//        PropertySpec propertySpec = new PropertySpec();
//        propertySpec.setType(rootFolder.getType());
//        propertySpec.getPathSet().add("childType");
//        propertySpec.getPathSet().add("childEntity");
//
//        // Create a PropertyFilterSpec and add the ObjectSpec and
//        // PropertySpec to it.  As above, the getter methods will automatically
//        // initialize the lists
//        PropertyFilterSpec propertyFilterSpec = new PropertyFilterSpec();
//        propertyFilterSpec.getObjectSet().add(objectSpec);
//        propertyFilterSpec.getPropSet().add(propertySpec);
//
//        // The RetrievePropertiesEx method takes a list of PropertyFilterSpec, so we need
//        // to create a list and add our propertyFilterSpec to it
//        List<PropertyFilterSpec> propertyFilterSpecList = new ArrayList<PropertyFilterSpec>();
//        propertyFilterSpecList.add(propertyFilterSpec);
//
//        // Although the RetrieveOptions parameter is optional, in Java we must pass
//        // something in.  A null will give us an exception, so we must pass in an empty
//        // RetrieveOptions object
//        RetrieveOptions retrieveOptions = new RetrieveOptions();
//
//        // Finally, make the call and get the results
//        RetrieveResult result = vimPort.retrievePropertiesEx(propertyCollector, propertyFilterSpecList, retrieveOptions);
//
//        // go through the returned list and print out the data.  We must do a null check on the result
//        if (result != null) {
//            for (ObjectContent objectContent : result.getObjects()) {
//                List<DynamicProperty> properties = objectContent.getPropSet();
//                for (DynamicProperty property : properties) {
//                    // Print the property name and value
//                    System.out.println(property.getName() + ": " + property.getVal());
//                    if (property.getName().equals("childType")) {
//                        System.out.println("childType:");
//                        // if this is the childType, the value is ArrayOfString
//                        ArrayOfString childType = (ArrayOfString)property.getVal();
//                        // get the string list
//                        List<String> types = childType.getString();
//                        // and print the values
//                        for (String s : types) {
//                            System.out.println(" -- " + s);
//                        }
//                    }
//                    if (property.getName().equals("childEntity")) {
//                        System.out.println("childEntity:");
//                        // if this is the childEntity, the value is ArrayOfManagedObjectReference
//                        ArrayOfManagedObjectReference childEngity = (ArrayOfManagedObjectReference)property.getVal();
//                        // get the ManagedObjectReference list
//                        List<ManagedObjectReference> entities = childEngity.getManagedObjectReference();
//                        // Print the type and the value of the ManagedObjectReference
//                        for (ManagedObjectReference entity : entities) {
//                            System.out.println(" -- " + entity.getType() + " - " + entity.getValue());
//                        }
//                    }
//                }
//            }
//        }
//    }
}
