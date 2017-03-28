/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sudokupackage;
import java.util.ArrayList;
/**
 *
 * @author Owen
 */
public class Sudoku {
    ArrayList<Integer> SodukuArray = new ArrayList<Integer>();
    
    public void createTestSudoku(){
           add(0, 9); add(2, 6); add(3, 7); add(4, 5); add(6, 1);
           add(8, 2); add(10, 3); add(11, 2); add(12, 9); add(18, 1);
           add(19, 7); add(19, 7); add(22, 2); add(24, 5); add(25, 9);
           add(26, 6); add(29, 1); add(30, 4); add(31, 3); add(32, 9);
           add(34, 5); add(36, 7); add(40, 1); add(43, 4); add(44, 8);
           add(45, 4); add(46, 2); add(51, 6); add(52, 1); add(53, 9);
           add(54, 6); add(56, 9); add(57, 1); add(60, 4); add(65, 4);
           add(66, 2); add(69, 7); add(70, 8); add(71, 1); add(72, 2);
           add(75, 8); add(77, 3); add(80, 0);
           
    }
    public void add(int i, int number){
        SodukuArray.add(i, number);
    }
    
    public int size(){
        return SodukuArray.size();
    }
}
