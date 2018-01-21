//
//  DataViewController.swift
//  AutoSOS
//
//  Created by Christopher Chen on 1/20/18.
//  Copyright © 2018 SpartaHackIV. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

class DataViewController: UIViewController {

    @IBOutlet weak var dataLabel: UILabel!
    var dataObject: String = ""


    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.dataLabel!.text = dataObject
    }


}

