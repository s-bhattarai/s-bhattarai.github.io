%
% amma_matlab_t2.m
% S. Bhattarai
% 8 October 2018
% AMMA MATLAB Tutorial 2: Scripts, functions and loading data with MATLAB
%
% Loading a data file, investigating the data set and presenting results.
%
% The dataset you will investigate is a paired set: 
%   - Attendance at Maths class
%   - Final overall score in Maths
% 
% Can you use this to determine the relationship between attendance and
% performance?
%

%
% 1. Provide the location of the data file and assign the filename to the
% variable xl_filename. 
% 
% For the script to work as it is, you should put the data file 
% attendance_vs_score.xlsx in a folder named 'datasets' within the current 
% folder. Otherwise, modify the script to point to the correct location of
% that file on your system.
%
% TIP: Always use the fullfile function, when pointing to file locations
% with MATLAB, because it is platform independent (i.e. works whether you
% use Windows, Mac OS, or Linux). Run help fullfile for more information.

xl_filename = fullfile(pwd,'datasets','attendance_vs_score.xlsx');

%
% 2. Open 'attendance_vs_score.xlsx' in Excel
% 3. Run help xlsread in the Command Window
% 4. Use xlsread to load the data into a MATLAB variable
% TIP: Choose a suitable, descriptive name for your MATLAB variable
%
att_v_score = xlsread(xl_filename);

%
% The previous command should load the data from the Excel file into a 36x2
% double MATLAB variable.
% 

%
% 5. Check the workspace to make sure that the data has been loaded
% sucessfully. 
%
% In order to automate data processing, it is necessary to be able to load
% data from scripts and functions, as opposed by using import buttons from
% the Graphical User Interface. MATLAB has in-built function for dealing
% with a wide range of input data file types (.xlsx, .txt, .csv, .json). We
% will explore these capabilites further next week. 
%

attendance = att_v_score(:,1);
score = att_v_score(:,2);

%
% 6. The first way to investigate the data set is through visualisation.
% What is the best way to visualise this data? Usually would try the plot
% function. 
% 

figure(1);
plot(attendance, score);
%
% Exercise 1. Consider the output from plot and why it is inappropriate. 
% 

figure(2);
hold on
grid on

scatter(attendance, score, 50,'r^');
title('The relationship between Attendance and Overall Performance in Marks','FontSize',14);
xlabel('Attendance','FontSize',14);
ylabel('Marks','FontSize',14);
set(gca, 'FontSize', 13)

%
% 7. Find the line of best fit to this data, and show the line of best fit 
% along with the data points.
% 
p = polyfit(attendance, score, 1);
f = polyval(p,attendance);
plot(attendance,f,'k--');
legend marks
hold off

%
% Exercise 2. Consider the axes on the figures. Would another choice of
% axes limits be a better choice in this context? If yes, change the limits
% axes limits to reflect this.
%
%
% Exercise 3. Improve upon this analysis with appropriate summary statistics
% and provide your own interpretation of the results, including a critical
% analysis of the limitations of the analysis. For example, you might want
% to consider calculating:
%
%   - the residuals (y_data-y_model)
%   - the standard deviation of the residuals
%   - uncertainty in the slope and intercept
%

%
% Exercise 4. Convert this MATLAB script into a MATLAB function that
% will take as input a MATLAB char array that indicates the location of the
% absolute location of the 'attendance_vs_score.xlsx' data file.
%