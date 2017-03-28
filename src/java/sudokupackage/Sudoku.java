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
        for(int i = 0; i<=80; i++){
            SodukuArray.add(0);
            
        }
        set(0, 9); set(2, 6); set(3, 7); set(4, 5); set(6, 1);
           set(8, 2); set(10, 3); set(11, 2); set(12, 9); set(18, 1);
           set(19, 7); set(19, 7); set(22, 2); set(24, 5); set(25, 9);
           set(26, 6); set(29, 1); set(30, 4); set(31, 3); set(32, 9);
           set(34, 5); set(36, 7); set(40, 1); set(43, 4); set(44, 8);
           set(45, 4); set(46, 2); set(51, 6); set(52, 1); set(53, 9);
           set(54, 6); set(56, 9); set(57, 1); set(60, 4); set(65, 4);
           set(66, 2); set(69, 7); set(70, 8); set(71, 1); set(72, 2);
           set(75, 8); set(77, 3); set(80, 0); 
           
           
    }
    
    public void add(int i, int value){
        SodukuArray.add(i, value);
        
    }
    public int get(int i){
        return SodukuArray.get(i);
    }
    public void set(int i, int value){
        SodukuArray.set(i, value);
    }
    public int size(){
        return SodukuArray.size();
    }
}